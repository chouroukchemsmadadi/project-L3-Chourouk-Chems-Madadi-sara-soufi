import React, { useState } from 'react';
import HistoryIcon from '@mui/icons-material/History';

function GestionDesReservations() {
  const [reservationData, setReservationData] = useState({
    id_chambre: '',
    id_client: '',
    date_debut: '',
    date_fin: '',
    statut: 'pending',
  });

  const [reservations, setReservations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [selectedReservationHistory, setSelectedReservationHistory] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddReservation = () => {
    setReservations([...reservations, reservationData]);
    setReservationData({
      id_chambre: '',
      id_client: '',
      date_debut: '',
      date_fin: '',
      statut: 'pending',
    });
  };

  const handleDeleteReservation = (index) => {
    const newReservations = reservations.filter((_, i) => i !== index);
    setReservations(newReservations);
  };

  const handleEditReservation = (index) => {
    setReservationData(reservations[index]);
    handleDeleteReservation(index);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleStatusChange = (index, status) => {
    const updatedReservations = [...reservations];
    updatedReservations[index].statut = status;
    setReservations(updatedReservations);
  };

  const handleViewHistory = (index) => {
    const roomHistory = selectedReservationHistory || [];
    alert(`Historique des réservations pour la chambre ${reservations[index].id_chambre} (ID: ${index}): ${roomHistory.join(", ")}`);
  };

  const handleShowHistory = (reservation) => {
    setSelectedReservationHistory({
      id_reservation: reservation.id,
      history: selectedReservationHistory || [],
    });
    setShowHistoryModal(true);
  };

  const filteredReservations = reservations.filter(reservation =>
    reservation.id_chambre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    reservation.id_client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <style>
        {`
        .container {
          background: linear-gradient(to bottom, #000428, #1d2634);
          color: white;
          min-height: 100vh;
          padding: 20px;
          font-family: Arial, sans-serif;
          width: 80vw;
          box-sizing: border-box;
          overflow-x: hidden;
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

        .reservation-form label {
          display: block;
          margin-bottom: 15px;
        }

        input[type="text"],
        input[type="number"],
        input[type="date"],
        textarea {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border-radius: 5px;
          border: none;
          font-size: 16px;
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

        .reservation-list {
          margin-top: 20px;
        }

        .reservation-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .reservation-item button {
          background-color: red;
          color: white;
        }

        .reservation-item button:hover {
          background-color: darkred;
        }
        `}
      </style>

      <h1>Gestion des Réservations</h1>
      <hr />

      <div className="section">
        <h2>Créer Réservation</h2>
        <div className="reservation-form">
          <label>
            ID de la Chambre:
            <input
              type="number"
              name="id_chambre"
              value={reservationData.id_chambre}
              onChange={handleInputChange}
              placeholder="Entrez l'ID de la chambre"
            />
          </label>
          <label>
            ID du Client:
            <input
              type="number"
              name="id_client"
              value={reservationData.id_client}
              onChange={handleInputChange}
              placeholder="Entrez l'ID du client"
            />
          </label>

          <label>
            Date de Début:
            <input
              type="date"
              name="date_debut"
              value={reservationData.date_debut}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Date de Fin:
            <input
              type="date"
              name="date_fin"
              value={reservationData.date_fin}
              onChange={handleInputChange}
            />
          </label>

          <button onClick={handleAddReservation}>Créer la Réservation</button>
        </div>
      </div>

      <div className="section">
        <h2>Liste des Réservations</h2>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Rechercher une réservation"
        />
        <div className="reservation-list">
          {filteredReservations.map((reservation, index) => (
            <div className="reservation-item" key={index}>
              <span>Chambre ID: {reservation.id_chambre} -- Client ID: {reservation.id_client} -- Dates: {reservation.date_debut} à {reservation.date_fin}</span>
              <button onClick={() => handleDeleteReservation(index)} style={{ marginTop: '15px' }}>Supprimer</button>
              <button onClick={() => handleEditReservation(index)} style={{ marginTop: '15px' }}>Modifier</button>

              <label>
                Changer Statut:
                <select onChange={(e) => handleStatusChange(index, e.target.value)} value={reservation.statut}>
                  <option value="pending">En attente</option>
                  <option value="confirmed">Confirmée</option>
                  <option value="cancelled">Annulée</option>
                </select>
              </label>

              <button
                style={{
                  marginLeft: '10px', backgroundColor: 'rgba(128, 128, 128, 1)', color: 'white', fontSize: '15px', padding: '8px', border: 'none', borderRadius: '4px', cursor: 'pointer'
                }}
                onClick={() => handleShowHistory(reservation)}
              >
                <HistoryIcon /> Historique
              </button>
            </div>
          ))}
        </div>
      </div>

      {showHistoryModal && selectedReservationHistory && (
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
            <h2>Détails de la réservation</h2>
            <p><strong>Id de la réservation :</strong> {selectedReservationHistory.id_reservation}</p>

            <h3>Historique des réservations :</h3>
            {selectedReservationHistory.history.length > 0 ? (
              <ul>
                {selectedReservationHistory.history.map((entry, index) => (
                  <li key={index}>
                    {entry.date_debut} à {entry.date_fin}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Aucune réservation préalable.</p>
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

export default GestionDesReservations;
