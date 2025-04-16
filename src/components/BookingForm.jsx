import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    personnes: '',
    enfants: '',
    bebes: '',
    dateDebut: '',
    dateFin: '',
    chambres: '',
  });

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedVue, setSelectedVue] = useState('');
  const [buffetMatin, setBuffetMatin] = useState(false);
  const [buffetNuit, setBuffetNuit] = useState(false);

  const [showClientForm, setShowClientForm] = useState(false);
  const [clientInfo, setClientInfo] = useState({
    nom: '',
    prenom: '',
    email: '',
    tel: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('');
  const [accountName, setAccountName] = useState('');
  const [paymentCode, setPaymentCode] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectType = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      if (selectedTypes.length < parseInt(formData.chambres)) {
        setSelectedTypes([...selectedTypes, type]);
      } else {
        alert("Vous avez dépassé le nombre de chambres.");
      }
    }
  };

  const handleSearchRooms = async () => {
    try {
      const availableRooms = await fetch(`/api/reservations?start=${formData.dateDebut}&end=${formData.dateFin}`);
      const rooms = await availableRooms.json();
      console.log("Chambres disponibles :", rooms);
      alert("Recherche terminée. Sélectionnez vos chambres.");
    } catch (error) {
      console.error("Erreur lors de la recherche des chambres :", error);
      alert("Erreur lors de la recherche des chambres.");
    }
  };

  const handleReserve = () => {
    if (!selectedVue || selectedTypes.length === 0) {
      alert("Veuillez choisir le type et la vue de chambre.");
      return;
    }
    if (selectedTypes.length > parseInt(formData.chambres)) {
      alert("Vous avez dépassé le nombre de chambres.");
      return;
    }
    setShowClientForm(true);
  };

  const handlePayment = () => {
    if (!paymentMethod || !accountName || !paymentCode) {
      alert("Veuillez remplir toutes les informations de paiement.");
      return;
    }
    console.log("Réservation confirmée !");
    console.log("Client :", clientInfo);
    console.log("Paiement :", paymentMethod, accountName, paymentCode);
    alert("Réservation effectuée avec succès !");
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Formulaire de Réservation</h3>

      {/* Étape 1 */}
      <div style={styles.row}>
        <div style={styles.inputContainer}>
          <label>Nombre de personnes</label>
          <input
            type="number"
            name="personnes"
            value={formData.personnes}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label>Nombre des bébés</label>
          <input
            type="number"
            name="bebes"
            value={formData.bebes}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label>Nombre des enfants</label>
          <input
            type="number"
            name="enfants"
            value={formData.enfants}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
      </div>

      <div style={styles.row}>
        <div style={styles.inputContainer}>
          <label>Date début</label>
          <input
            type="date"
            name="dateDebut"
            value={formData.dateDebut}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label>Date fin</label>
          <input
            type="date"
            name="dateFin"
            value={formData.dateFin}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
      </div>

      <div style={styles.inputContainer}>
        <label>Nombre des chambres</label>
        <input
          type="number"
          name="chambres"
          value={formData.chambres}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <button style={styles.button} onClick={handleSearchRooms}>
        Recherche
      </button>

      {/* Étape 2 */}
      {formData.personnes && formData.chambres && (
        <>
          <h3 style={styles.title}>Les chambres disponibles</h3>
          <label>Type de chambre:</label>
          <div style={styles.optionsRow}>
            {['Double rooms', 'Single room', 'Family room', 'Suite'].map((type) => (
              <button
                key={type}
                style={{
                  ...styles.optionButton,
                  backgroundColor: selectedTypes.includes(type) ? '#dfb8a9' : '#e9e9e9',
                }}
                onClick={() => handleSelectType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          <label style={{ marginTop: '20px' }}>Vue de chambre:</label>
          <div style={styles.optionsRow}>
            {['Mer', 'Jardin', 'Parc', 'Piscine'].map((vue) => (
              <button
                key={vue}
                style={{
                  ...styles.optionButton,
                  backgroundColor: selectedVue === vue ? '#dfb8a9' : '#e9e9e9',
                }}
                onClick={() => setSelectedVue(vue)}
              >
                {vue}
              </button>
            ))}
          </div>

          <label style={{ marginTop: '20px' }}>Buffet:</label>
          <div style={styles.optionsRow}>
            <label>
              <input type="checkbox" checked={buffetMatin} onChange={() => setBuffetMatin(!buffetMatin)} />
              Buffet Matin
            </label>
            <label>
              <input type="checkbox" checked={buffetNuit} onChange={() => setBuffetNuit(!buffetNuit)} />
              Buffet Nuit
            </label>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <button style={{ ...styles.button, backgroundColor: '#ccc' }}>Annuler</button>
            <button style={styles.button} onClick={handleReserve}>
              Réserver
            </button>
          </div>
        </>
      )}

      {/* Étape 3 */}
      {showClientForm && (
        <>
          <h3 style={styles.title}>Informations du client</h3>
          <div style={styles.row}>
            <div style={styles.inputContainer}>
              <label>Nom</label>
              <input
                type="text"
                value={clientInfo.nom}
                onChange={(e) => setClientInfo({ ...clientInfo, nom: e.target.value })}
                style={styles.input}
              />
            </div>
            <div style={styles.inputContainer}>
              <label>Prénom</label>
              <input
                type="text"
                value={clientInfo.prenom}
                onChange={(e) => setClientInfo({ ...clientInfo, prenom: e.target.value })}
                style={styles.input}
              />
            </div>
          </div>
          <div style={styles.row}>
            <div style={styles.inputContainer}>
              <label>Email</label>
              <input
                type="email"
                value={clientInfo.email}
                onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                style={styles.input}
              />
            </div>
            <div style={styles.inputContainer}>
              <label>Téléphone</label>
              <input
                type="tel"
                value={clientInfo.tel}
                onChange={(e) => setClientInfo({ ...clientInfo, tel: e.target.value })}
                style={styles.input}
              />
            </div>
          </div>

          <h4 style={styles.title}>Facture</h4>
          <div style={{ textAlign: 'center', marginBottom: '15px' }}>
            <p><strong>Chambres:</strong> {selectedTypes.length}</p>
            <p><strong>Buffet matin:</strong> {buffetMatin ? 'Oui' : 'Non'}</p>
            <p><strong>Buffet nuit:</strong> {buffetNuit ? 'Oui' : 'Non'}</p>
            <p><strong>Vue:</strong> {selectedVue}</p>
            <p><strong>Total estimé:</strong> {(selectedTypes.length * 15000) + (buffetMatin ? 2000 : 0) + (buffetNuit ? 2500 : 0)} DA</p>
          </div>

          <h4 style={styles.title}>Méthode de paiement</h4>
          <div style={styles.optionsRow}>
            {['Cash', 'CIB', 'Visa', 'BaridiMob'].map((method) => (
              <button
                key={method}
                style={{
                  ...styles.optionButton,
                  backgroundColor: paymentMethod === method ? '#dfb8a9' : '#e9e9e9',
                }}
                onClick={() => setPaymentMethod(method)}
              >
                {method}
              </button>
            ))}
          </div>

          {paymentMethod && (
            <>
              <div style={styles.inputContainer}>
                <label>Nom de compte</label>
                <input
                  type="text"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  style={styles.input}
                />
              </div>
              <div style={styles.inputContainer}>
                <label>Code</label>
                <input
                  type="password"
                  value={paymentCode}
                  onChange={(e) => setPaymentCode(e.target.value)}
                  style={styles.input}
                />
              </div>
            </>
          )}

          <button style={styles.button} onClick={handlePayment}>
            Payer
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f4f4f4',
    padding: '30px',
    borderRadius: '12px',
    width: '100%',
    height: ' 60vh',
    maxWidth: '850px',
    margin: 'auto',
    marginTop: '20px',
    fontFamily: 'serif',
    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    gap: '10px',
  },
  inputContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginRight: '10px',
    marginBottom: '15px',
  },
  input: {
    borderRadius: '25px',
    padding: '10px 15px',
    border: '1px solid #ccc',
    backgroundColor: '#e9e9e9',
    outline: 'none',
    marginTop: '5px',
  },
  button: {
    backgroundColor: '#dfb8a9',
    color: '#000',
    border: 'none',
    borderRadius: '25px',
    padding: '10px 30px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'block',
    margin: 'auto',
    marginTop: '20px',
  },
  optionsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '10px',
    marginBottom: '15px',
  },
  optionButton: {
    padding: '10px 20px',
    borderRadius: '25px',
    border: '1px solid #ccc',
    cursor: 'pointer',
  },
};

export default BookingForm;