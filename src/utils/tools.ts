const getDayOfWeek = (index: number) => {
    const dayOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return dayOfWeek[index];
}

const getMonthName = (index: number) => {
    const month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return month[index];
}

const formatDateZero = (date: number) => (date < 10) ? `0${date}` : date;

export { getDayOfWeek, getMonthName, formatDateZero }