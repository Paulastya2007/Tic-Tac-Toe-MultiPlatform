// components/PlayWithAI.js

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PlayWithAI = ({ navigation }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (!isXNext) {
      // AI's turn
      const bestMove = getBestMove();
      handlePress(bestMove);
    }
  }, [board]); // Trigger AI move whenever the board changes

  const handlePress = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    setWinner(calculateWinner(newBoard));
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    if (squares.every((square) => square !== null)) {
      return 'Draw'; // If all squares are filled but no winner, it's a draw
    }

    return null;
  };

  const renderSquare = (index) => (
    <TouchableOpacity style={styles.square} onPress={() => handlePress(index)}>
      <Text style={styles.squareText}>{board[index]}</Text>
    </TouchableOpacity>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const getAvailableMoves = (board) => {
    return board.reduce((acc, cell, index) => {
      if (!cell) acc.push(index);
      return acc;
    }, []);
  };

  const getBestMove = () => {
    const availableMoves = getAvailableMoves(board);

    // Check for winning move
    for (let i = 0; i < availableMoves.length; i++) {
      const move = availableMoves[i];
      const newBoard = [...board];
      newBoard[move] = 'O'; // AI's move
      if (calculateWinner(newBoard) === 'O') {
        return move; // Winning move found
      }
    }

    // Check for blocking move
    for (let i = 0; i < availableMoves.length; i++) {
      const move = availableMoves[i];
      const newBoard = [...board];
      newBoard[move] = 'X'; // Player's move
      if (calculateWinner(newBoard) === 'X') {
        return move; // Blocking move found
      }
    }

    // If no winning or blocking move, make a random move
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={32} color="#0f0" />
      </TouchableOpacity>
      <Text style={styles.title}>Tic Tac Toe (vs AI)</Text>
      <Text style={styles.turnText}>{winner ? 'Winner: ' + winner : 'Turn: ' + (isXNext ? 'You' : 'AI')}</Text>
      <View style={styles.board}>
        {board.map((_, index) => renderSquare(index))}
      </View>
      {winner && winner !== 'Draw' && (
        <Text style={styles.winnerText}>{winner} Wins!</Text>
      )}
      {winner === 'Draw' && (
        <Text style={styles.winnerText}>It's a Draw!</Text>
      )}
      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 36,
    color: '#0f0',
    fontFamily: 'monospace',
    marginBottom: 20,
    textShadowColor: '#00f',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  turnText: {
    fontSize: 24,
    color: '#0f0',
    fontFamily: 'monospace',
    marginBottom: 20,
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 5,
    borderColor: '#0f0',
  },
  square: {
    width: '33.33%',
    height: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0f0',
  },
  squareText: {
    fontSize: 36,
    color: '#0f0',
    fontFamily: 'monospace',
  },
  winnerText: {
    fontSize: 24,
    color: '#0f0',
    fontFamily: 'monospace',
    marginVertical: 20,
  },
  resetButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0f0',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#0f0',
    fontFamily: 'monospace',
  },
});

export default PlayWithAI;
