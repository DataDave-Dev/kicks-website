const formatDate = (date) => {
  const timestamp = new Date(date);
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  const mes = meses[timestamp.getMonth()];
  const anio = timestamp.getFullYear();
  return `${mes} ${anio}`;
};
const isPasswordValid = (password) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(password);
};

export { formatDate as f, isPasswordValid as i };
