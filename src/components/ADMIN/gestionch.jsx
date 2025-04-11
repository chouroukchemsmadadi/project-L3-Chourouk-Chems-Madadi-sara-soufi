import React, { useState } from 'react';
import BathtubIcon from '@mui/icons-material/Bathtub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DoorFrontIcon from '@mui/icons-material/DoorFront';
import LandscapeIcon from '@mui/icons-material/Landscape';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import AccessibilityIcon from '@mui/icons-material/AccessibilityNew';
import BalconyIcon from '@mui/icons-material/Balcony';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import HistoryIcon from '@mui/icons-material/History';  // Ajouter cette importation pour HistoryIcon

function GestionDesChambres() {
  const [roomData, setRoomData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    amenities: [],
    status: 'available', // Ajout du statut
    promotion: '',       // Ajout de la promotion
    discount: 0,         // Ajout de la réduction
    promotionPeriod: '', // Ajout de مدة العرض
  });

  const [rooms, setRooms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [history, setHistory] = useState({}); // Ajouter سجل الحجوزات لكل غرفة
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [selectedRoomHistory, setSelectedRoomHistory] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAmenitiesChange = (e) => {
    const { name, checked } = e.target;
    setRoomData(prevState => ({
      ...prevState,
      amenities: checked
        ? [...prevState.amenities, name]
        : prevState.amenities.filter(item => item !== name)
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setRoomData(prevState => ({
        ...prevState,
        image: URL.createObjectURL(file)
      }));
    }
  };

  const handleAddRoom = () => {
    setRooms([...rooms, roomData]);
    setRoomData({
      name: '',
      description: '',
      price: '',
      image: '',
      amenities: [],
      status: 'available',
      promotion: '',
      discount: 0,
      promotionPeriod: '',
    });
  };

  const handleDeleteRoom = (index) => {
    const newRooms = rooms.filter((_, i) => i !== index);
    setRooms(newRooms);
  };

  const handleEditRoom = (index) => {
    setRoomData(rooms[index]);
    handleDeleteRoom(index); // Optionnel: Vous pouvez aussi modifier directement dans la liste
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleStatusChange = (index, status) => {
    const updatedRooms = [...rooms];
    updatedRooms[index].status = status;
    setRooms(updatedRooms);
  };

  const handlePromotionChange = (index, discount, promotionPeriod) => {
    const updatedRooms = [...rooms];
    updatedRooms[index].promotion = discount; // Pas de validation ici pour permettre la saisie libre
    updatedRooms[index].promotionPeriod = promotionPeriod;
    setRooms(updatedRooms);
  };

  const validatePromotion = (index) => {
    const updatedRooms = [...rooms];
    const discount = Number(updatedRooms[index].promotion);

    // Vérification à la fin de la saisie
    if (discount < 1) {
      updatedRooms[index].promotion = 1;
    } else if (discount > 100) {
      updatedRooms[index].promotion = 100;
    }

    setRooms(updatedRooms);
  };

  const handleViewHistory = (index) => {
    // تأكيد أن لديك سجلات الحجوزات لكل غرفة
    const roomHistory = history[index] || [];
    alert(`تاريخ الحجوزات للغرفة ${rooms[index].name} (ID: ${index}): ${roomHistory.join(", ")}`);
  };

  const handleShowHistory = (room) => {
    setSelectedRoomHistory({
      id_chambre: room.id,
      type_chambre: room.name,
      history: history[room.id] || [],
    });
    setShowHistoryModal(true);
  };

  const filteredRooms = rooms.filter(room =>
    room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    room.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <style>
        {`
        .container {
          background: linear-gradient(to bottom, #000428,#1d2634);
          color: white;
          min-height: 100vh;
          padding: 20px;
          font-family: Arial, sans-serif;
          width: 80vw;
          box-sizing: border-box;
          overflow-x: hidden;
          direction: ltr;
        }

        h1 {
          text-align: center;
          color: white;
          margin-bottom: 20px;
        }

        hr {
          border: 1px solid white;
          margin-bottom: 30px;
        }

        .section {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 10px;
          margin-bottom: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .room-form label {
          display: block;
          margin-bottom: 15px;
        }

        input[type="text"],
        input[type="number"],
        textarea {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border-radius: 5px;
          border: none;
          font-size: 16px;
        }

        input[type="file"] {
          margin-top: 10px;
          width: 100%;
        }

        .room-amenities label {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }

        .room-amenities svg {
          margin-right: 10px;
        }

        button {
          background-color: white;
          color: #004e92;
          padding: 12px 25px;
          border: none;
          border-radius: 5px;
          margin-top: 20px;
          cursor: pointer;
          font-size: 16px;
        }

        button:hover {
          background-color: #ddd;
        }

        .room-image-preview img {
          margin-top: 20px;
          max-width: 100%;
          border-radius: 8px;
        }

        .room-list {
          margin-top: 20px;
        }

        .room-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .room-item button {
          background-color: red;
          color: white;
        }

        .room-item button:hover {
          background-color: darkred;
        }
        `}
      </style>

      <h1>Gestion des Chambres</h1>
      <hr />

      <div className="section">
        <h2>Creer Chambre</h2>
        <div className="room-form">
          <label>
            Le Type de la Chambre:
            <input
              type="text"
              name="name"
              value={roomData.name}
              onChange={handleInputChange}
              placeholder="Entrez le nom de la chambre"
            />
          </label>
          <label>
            ID de la Chambre:
            <input
              type="number"
              name="ID"
              value={roomData.ID}
              onChange={handleInputChange}
              placeholder="Entrez le ID de la chambre"
            />
          </label>

          <label>
            Description:
            <textarea
              name="description"
              value={roomData.description}
              onChange={handleInputChange}
              placeholder="Entrez une description"
            />
          </label>

          <label>
            Prix par nuit:
            <input
              type="number"
              name="price"
              value={roomData.price}
              onChange={handleInputChange}
              placeholder="Prix"
            />
          </label>

          <label>
            Image de la Chambre:
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>

          <div className="room-amenities">
            <h3>Commodités :</h3>
            {[{ name: 'bathtub', label: 'Baignoire', icon: <BathtubIcon /> },
              { name: 'view', label: 'Vue', icon: <VisibilityIcon /> },
              { name: 'door', label: 'Porte sécurisée', icon: <DoorFrontIcon /> },
              { name: 'landscape', label: 'Paysage', icon: <LandscapeIcon /> },
              { name: 'smokeFree', label: 'Non fumeur', icon: <SmokeFreeIcon /> },
              { name: 'accessibility', label: 'Accessibilité', icon: <AccessibilityIcon /> },
              { name: 'balcony', label: 'Balcon', icon: <BalconyIcon /> },
              { name: 'meetingRoom', label: 'Salle de réunion', icon: <MeetingRoomIcon /> },
              { name: 'sunny', label: 'Ensoleillée', icon: <WbSunnyIcon /> },
            ].map(item => (
              <label key={item.name}>
                <input
                  type="checkbox"
                  name={item.name}
                  checked={roomData.amenities.includes(item.name)}
                  onChange={handleAmenitiesChange}
                />
                {item.icon} {item.label}
              </label>
            ))}
          </div>

          <button onClick={handleAddRoom}>Creer la Chambre</button>
        </div>
      </div>

      <div className="section">
        <h2>Liste des Chambres</h2>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Rechercher une chambre"
        />
        <div className="room-list">
          {filteredRooms.map((room, index) => (
            <div className="room-item" key={index}>
              <span>{room.name} -- {room.price} € / nuit</span>
              <button onClick={() => handleDeleteRoom(index)} style={{ marginTop: '15px',
              backgroundColor: 'red',
              color: 'white',
              padding: '10px',
              borderRadius: '5px',} }>Supprimer</button>
              <button onClick={() => handleEditRoom(index)}
                style={{ marginTop: '15px',
                  backgroundColor: 'green',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '5px',} }
                
                
                
                >Modifier</button>

              <label>
                Changer Etat:
                <select onChange={(e) => handleStatusChange(index, e.target.value)} value={room.status} style={{padding: '8px'}}>
                  <option value="available">Disponible</option>
                  <option value="maintenance">En maintenance</option>
                  <option value="reserved">Réservé</option>
                </select>
              </label>

              <label>
                Ajouter Promotion (%):
                <input
                  type="number"
                  value={room.promotion}
                  onChange={(e) => handlePromotionChange(index, e.target.value, room.promotionPeriod)}
                  onBlur={() => validatePromotion(index)}
                  placeholder="100%"
                  min="1"
                  max="100"
                />
              </label>

              <button
                style={{
                  marginLeft: '10px', backgroundColor: 'rgba(128, 128, 128, 1)', color: 'white', fontSize: '15px', padding: '8px', border: 'none', borderRadius: '4px', cursor: 'pointer'
                }}
                onClick={() => handleShowHistory(room)}
              >
                <HistoryIcon /> Historique
              </button>
            </div>
          ))}
        </div>
      </div>

      {showHistoryModal && selectedRoomHistory && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'rgba(150, 148, 148, 0.85)',
            padding: '20px',
            borderRadius: '12px',
            width: '500px',
            maxHeight: '80%',
            overflowY: 'auto',
            color: 'black',
          }}>
            <h2>Détails de la date de réservation</h2>
            <p><strong> Id de chambre :</strong> {selectedRoomHistory.id_chambre}</p>
            <p><strong>Type de chambre :</strong> {selectedRoomHistory.type_chambre}</p>

            <h3>Historique des réservations :</h3>
            {selectedRoomHistory.history.length > 0 ? (
              <ul>
                {selectedRoomHistory.history.map((entry, index) => (
                  <li key={index}>
                    {entry.date_debut} à{entry.date_fin}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Aucune réservation préalable.</p>
            )}

            {selectedRoomHistory.history.length > 0 && (
              <p><strong>Dernière date de réservation :</strong> {selectedRoomHistory.history[selectedRoomHistory.history.length - 1].date_fin}</p>
            )}

            <button onClick={() => setShowHistoryModal(false)} style={{
              marginTop: '15px',
              backgroundColor: 'red',
              color: 'white',
              padding: '10px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GestionDesChambres;
