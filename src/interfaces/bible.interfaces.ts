export interface Libro {
  slug: string;
  nombre: string;
  color: string;
}
export interface Seccion {
  nombre: string;
  color: string;
  libros: Libro[];
}
export interface Testamento {
  nombre: string;
  secciones: Seccion[];
}
export type Def  = [numero: number, slug: string, nombre: string, color?: string];