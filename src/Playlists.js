import './Playlists.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const CLIENT_ID = '3f561a48b5c74d43ae47a13588e1a962';
const CLIENT_SECRET = '1fd0d52564214419ac3c931761f82cf5';

function Playlist() {
  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // Obtendo o Token de Acesso
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    };

    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token));
  }, []);

  // Função para buscar as playlists
  async function search() {
    console.log('Buscando playlists relacionadas a: ' + searchInput);

    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    };

    await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=playlist&limit=20`, searchParameters)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPlaylists(data.playlists?.items || []); // Garante que playlists sempre será um array
      });
  }

  return (
    <div className='App'>
      <div className="title-container-playlist">
        <img src="/logoSpotify.png" alt="Spotify Logo" className="logo" />
        <h1 className="title-playlist">Spotify Playlists</h1>
      </div>
      <Container  className="custom-container">
        <InputGroup className='custom-input-group'>
          <FormControl
            className="custom-input"
            placeholder='Buscar Playlist'
            type='input'
            onKeyDown={event => {
              if (event.key === 'Enter') {
                search();
              }
            }}
            onChange={event => setSearchInput(event.target.value)}
          />
          <Button className='buttonSearch' onClick={search}>Buscar</Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className='mx-2 row row-cols-4 justify-content-center'>
          {playlists.map((playlist, index) => {
            // Verificação para evitar erro de acesso a propriedades de null ou undefined
            if (!playlist || !playlist.name) return null;

            return (
              <Card key={index} className="mb-3 custom-card">
                <Card.Img src={playlist.images[0].url} />
                <Card.Body>
                  <Card.Title>{playlist.name}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Playlist;
