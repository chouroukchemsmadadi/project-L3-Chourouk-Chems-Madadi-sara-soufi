import React, { useState, useEffect } from 'react';
import HistoryIcon from '@mui/icons-material/History';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

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
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await axios.get(`${API_URL}/reservations`);
      setReservations(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des réservations :", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddOrUpdateReservation = async () => {
    try {
      if (isEditing && reservationData.id) {
        await axios.put(`${API_URL}/reservations/${reservationData.id}`, reservationData);
      } else {
        await axios.post(`${API_URL}/reservations`, reservationData);
      }
      setReservationData({
        id_chambre: '',
        id_client: '',
        date_debut: '',
        date_fin: '',
        statut: 'pending',
      });
      setIsEditing(false);
      fetchReservations();
    } catch (error) {
      console.error("Erreur lors de l'ajout/modification :", error);
    }
  };

  const handleDeleteReservation = async (id) => {
    try {
      await axios.delete(`${API_URL}/reservations/${id}`);
      fetchReservations();
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  const handleEditReservation = (reservation) => {
    setReservationData({
      id: reservation.id_reservation,
      id_chambre: reservation.id_chambre,
      id_client: reservation.id_client,
      date_debut: reservation.date_debut,
      date_fin: reservation.date_fin,
      statut: reservation.statut,
    });
    setIsEditing(true);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleShowHistory = (reservation) => {
    setSelectedReservation(reservation);
    setShowHistoryModal(true);
  };

  const handleCloseHistoryModal = () => {
    setShowHistoryModal(false);
  };

  const filteredReservations = reservations.filter((r) =>
    r.id_chambre?.toString().includes(searchQuery) ||
    r.id_client?.toString().includes(searchQuery) ||
    r.id_reservation?.toString().includes(searchQuery) ||
    r.client?.nom?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.chambre?.type_chambre?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="container">
      <style>{`
        .container {
          background: linear-gradient(to bottom, #000428,rgb(65, 78, 99));
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
          margin-bottom: 20px;
        }

        .section {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 10px;
          margin-bottom: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        label {
          display: block;
          margin-bottom: 15px;
        }

        input, select {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border-radius: 20px;
          border: none;
          font-size: 15px;
          background-color: rgba(255, 255, 255, 0.45);
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

        .reservation-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-color: rgba(0,0,0,0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          visibility: ${showHistoryModal ? 'visible' : 'hidden'};
          opacity: ${showHistoryModal ? '1' : '0'};
          transition: opacity 0.3s ease;
        }

        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          color: black;
          width: 50%;
        }

        .close-btn {
          background-color: red;
          color: white;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
        }
      `}</style>

      <h1>Gestion des Réservations</h1>

      <div className="section">
        <h2>{isEditing ? 'Modifier Réservation' : 'Créer Réservation'}</h2>
        <div className="reservation-form">
          <label>ID de la Chambre:
            <input type="number" name="id_chambre" value={reservationData.id_chambre} onChange={handleInputChange} />
          </label>
          <label>ID du Client:
            <input type="number" name="id_client" value={reservationData.id_client} onChange={handleInputChange} />
          </label>
          <label>Date de début:
            <input type="date" name="date_debut" value={reservationData.date_debut} onChange={handleInputChange} />
          </label>
          <label>Date de fin:
            <input type="date" name="date_fin" value={reservationData.date_fin} onChange={handleInputChange} />
          </label>
          <label>Statut:
            <select name="statut" value={reservationData.statut} onChange={handleInputChange}>
              <option value="pending">En attente</option>
              <option value="confirmed">Confirmée</option>
              <option value="cancelled">Annulée</option>
            </select>
          </label>
          <button onClick={handleAddOrUpdateReservation}>
            {isEditing ? 'Mettre à jour' : 'Ajouter Réservation'}
          </button>
        </div>
      </div>

      <div className="section">
        <h2>Liste des Réservations</h2>
        <input type="text" placeholder="Rechercher..." value={searchQuery} onChange={handleSearchChange} />
        <div className="reservation-list">
          {filteredReservations.map((r) => (
            <div key={r.id_reservation} className="reservation-item">
              <div>
                <p><strong>ID Réservation:</strong> {r.id_reservation}</p>
                <p><strong>ID Chambre:</strong> {r.id_chambre}</p>
                <p><strong>ID Client:</strong> {r.id_client}</p>
                <p><strong>Début:</strong> {r.date_debut}</p>
                <p><strong>Fin:</strong> {r.date_fin}</p>
              </div>
              <div>
                <button onClick={() => handleEditReservation(r)} style={{ backgroundColor: 'green' }}>Modifier</button>
                <button onClick={() => handleDeleteReservation(r.id_reservation)}>Supprimer</button>
                <button onClick={() => handleShowHistory(r)} style={{ backgroundColor: 'grey' }}>
                  <HistoryIcon /> Historique
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showHistoryModal && selectedReservation && (
        <div className="modal">
          <div className="modal-content">
          <p><strong>ID Réservation:</strong> {selectedReservation.id_reservation}</p>
            <p><strong>Chambre:</strong> N°{selectedReservation.chambre?.numero}</p>
            <p><strong>Type:</strong> {selectedReservation.chambre?.type_chambre}</p>
            <p><strong>Prix:</strong> {selectedReservation.chambre?.prix} DA</p>
            <hr />
            <p><strong>Nom Client:</strong> {selectedReservation.client?.nom}</p>
            <p><strong>Email:</strong> {selectedReservation.client?.email}</p>
            <p><strong>Téléphone:</strong> {selectedReservation.client?.tel}</p>
            <hr />
            <p><strong>Date Début:</strong> {selectedReservation.date_debut}</p>
            <p><strong>Date Fin:</strong> {selectedReservation.date_fin}</p>
            <p><strong>Statut:</strong> {selectedReservation.statut}</p>
            <button className="close-btn" onClick={handleCloseHistoryModal}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GestionDesReservations;
