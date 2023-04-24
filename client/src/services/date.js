const date = new Date();
export const mes = date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
export const dia = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
export const Actualdate = date.getFullYear() + "-" + mes + "-" + dia;
export const hora = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
export const minutos = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
export const horaactual = hora + ":" + minutos;