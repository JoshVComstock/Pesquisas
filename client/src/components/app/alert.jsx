
import { toast } from 'react-toastify'
export const alertnotify = (nombre, accion) => {

  accion === " editado" ? toast.success(nombre + accion + " Exitosamente") : accion === " eliminado" ? toast.error(nombre + accion + " Exitosamente") : toast.success(nombre + accion + " Exitosamente")
}

