import React, { useState } from 'react';

const MainPage: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleWidth = () => {
    setIsExpanded(!isExpanded);
  };

  const firstComponentWidth = isExpanded ? '70%' : '30%';

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
      <div style={{ width: firstComponentWidth, border: '1px solid black' }}>
        <button onClick={toggleWidth}>
          {isExpanded ? 'Reduzir' : 'Expandir'}
        </button>
        <p>Conteúdo do componente 1</p>
      </div>
      <div style={{ flex: 1, border: '1px solid black' }}>
        <img src="public/mapa.png" alt="Imagem" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default MainPage;
