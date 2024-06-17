import { useEffect, useState, memo } from 'react';
import GameHeader from './components/GameHeader';
import Board from './components/Board';
import GameMessage from './components/GameMessage';
import './app.css';
import axios from 'axios';
import jogoVelhaLogo from '/jogo-velha.svg';

function generateId() {
  let d = new Date();
  let aTime = d.getTime();
  let timeString = aTime.toString(10);
  let truncatedTimeString = timeString.slice(6, 13);
  let newTempIdValue = parseInt(truncatedTimeString);
  return newTempIdValue;
}

function getUserId() {
  let jvLocalId = localStorage.getItem('jv_local_id');
  if (jvLocalId == null) {
    jvLocalId = generateId();
    localStorage.setItem('jv_local_id', jvLocalId);
  }
  return jvLocalId;
}

function App() {
  const headerText = ['Jogo da Velha', '(Dificuldade: Kobayashi Maru)'];
  const [gameMessage, setGameMessage] = useState('Carregando...');
  const [gameMatrix, setGameMatrix] = useState([[0, 1, 0], [1, 2, 1], [0, 1, 0]]);
  const [url, setUrl] = useState('');

  useEffect(() => {
    const userId = getUserId();
    const gameUrl = `https://dogserver.pythonanywhere.com/${userId}/`;
    setUrl(gameUrl);
  }, []);

  useEffect(() => {
    const fetchGameState = async () => {
      try {
        const response = await axios.get(url);
        setGameMessage(response.data[0]);
        setGameMatrix(response.data[1][0]);
      } catch (error) {
        console.error('Erro ao buscar o estado do jogo:', error);
      }
    };
    if (url) {
      fetchGameState();
    }
  }, [url]);

  const handlePositionClick = async (id) => {
    const [line, column] = id;
    const data = `line=${line + 1}&column=${column + 1}`;
    try {
      const response = await axios.post(url, data);
      setGameMessage(response.data[0]);
      setGameMatrix(response.data[1][0]);
    } catch (error) {
      console.error('Erro ao atualizar o estado do jogo:', error);
    }
  };

  const MemoizedGameHeader = memo(GameHeader);
  const MemoizedBoard = memo(Board);
  const MemoizedGameMessage = memo(GameMessage);

  return (
    <div className='container'>
      <MemoizedGameHeader title={headerText} />
      <MemoizedBoard matrix={gameMatrix} onPositionClick={handlePositionClick} />
      <MemoizedGameMessage message={gameMessage} />
    </div>
  );
}

export default App;
