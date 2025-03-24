test('verifica la URL del servidor', () => {
    expect(process.env.VITE_URL_SERVER).toBe('http://localhost:3000');
  });
  
  