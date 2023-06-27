interface DataType {
 nombre: string;
 constelacion: string;
 id: number;
}

const initialDb: DataType[] = [
 {
  id: 1,
  nombre: 'Seiya',
  constelacion: 'Pegaso',
 },
 {
  id: 2,
  nombre: 'Shiryu',
  constelacion: 'Dragon',
 },
 {
  id: 3,
  nombre: 'Hyoga',
  constelacion: 'Cisne',
 },
 {
  id: 4,
  nombre: 'Shun',
  constelacion: 'Andromeda',
 },
 {
  id: 5,
  nombre: 'Ikki',
  constelacion: 'Fenix',
 },
];
export default initialDb;
