import { useState } from 'react';

const initialData = [
  { codigo: 'HGRU11', setor: 'Tijolo', preco: 100, dy: 1.0, qtd: 2 },
  { codigo: 'XPPR11', setor: 'Escritório', preco: 75, dy: 1.05, qtd: 2 },
  { codigo: 'IRDM11', setor: 'Papel', preco: 100, dy: 1.1, qtd: 2 },
  { codigo: 'CPTS11', setor: 'Híbrido', preco: 95, dy: 0.95, qtd: 2 },
  { codigo: 'BCFF11', setor: 'FoF', preco: 72, dy: 0.95, qtd: 3 },
  { codigo: 'MXRF11', setor: 'Papel', preco: 10, dy: 1.0, qtd: 10 },
];

export default function App() {
  const [fiis, setFiis] = useState(initialData);
  const [aporte, setAporte] = useState(1000);

  const totalInvestido = fiis.reduce((acc, fii) => acc + fii.qtd * fii.preco, 0);
  const rendaMensal = fiis.reduce((acc, fii) => acc + fii.qtd * fii.preco * (fii.dy / 100), 0);
  const dyMedio = (rendaMensal / totalInvestido) * 100;

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Carteira Interativa de FIIs</h1>
      <p><strong>Total Investido:</strong> R$ {totalInvestido.toFixed(2)}</p>
      <p><strong>Renda Mensal Estimada:</strong> R$ {rendaMensal.toFixed(2)}</p>
      <p><strong>Dividend Yield Médio:</strong> {dyMedio.toFixed(2)}% a.m.</p>
      <input
        type="number"
        value={aporte}
        onChange={(e) => setAporte(Number(e.target.value))}
        placeholder="Novo aporte mensal"
      />
      <button onClick={() => alert('Funcionalidade de simulação em breve!')}>Simular Aporte</button>
    </div>
  );
}