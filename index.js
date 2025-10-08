// The crossword puzzle layout
// Use "." for black cells, letters for correct answers
const puzzle = [
    ['W', 'A', 'R', 'M', '.'],
    ['P', '.', '.', '.', 'D'],
    ['E', '.', 'D', 'O', 'G'],
    ['N', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.']
  ];
  
  // Create the crossword grid
  function createCrossword() {
    const table = document.getElementById('crossword-grid');
  
    for (let row = 0; row < puzzle.length; row++) {
      const tr = document.createElement('tr');
  
      for (let col = 0; col < puzzle[row].length; col++) {
        const td = document.createElement('td');
  
        if (puzzle[row][col] === '.') {
          td.classList.add('black-cell'); // black cell
        } else {
          const input = document.createElement('input');
          input.setAttribute('maxlength', 1);
          input.dataset.row = row;
          input.dataset.col = col;
          td.appendChild(input);
        }
  
        tr.appendChild(td);
      }
  
      table.appendChild(tr);
    }
  }
  
  // Check the user's answers
  function checkAnswers() {
    const inputs = document.querySelectorAll('input');
    let total = 0;
    let correct = 0;
  
    inputs.forEach((input) => {
      const row = parseInt(input.dataset.row);
      const col = parseInt(input.dataset.col);
      const expected = puzzle[row][col];
  
      const userInput = input.value.toUpperCase();
  
      if (userInput === expected) {
        input.style.backgroundColor = '#c8f7c5'; // green
        correct++;
      } else {
        input.style.backgroundColor = '#f8d7da'; // red
      }
  
      total++;
    });
  
    const result = document.getElementById('result');
    result.textContent = `You got ${correct} out of ${total} correct.`;
  }
  
  // Call the function to create the puzzle when page loads
  createCrossword();
  