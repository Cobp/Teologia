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

type Def = [numero: number, slug: string, nombre: string, color?: string];


const seccion = (nombre: string, color: string, defs: Def[]): Seccion => ({
  nombre,
  color,
  libros: defs.map(([n, slug, nom, c]) => ({
    slug: slug,
    nombre: nom,
    color: c ?? color,
  })),
});

export const testamentos: Testamento[] = [
  {
    nombre: "Nuevo Testamento",
    secciones: [
      seccion("Evangelios", "#574b10", [
        [40, "mateo", "Mateo"],
        [41, "marcos", "Marcos"],
        [42, "lucas", "Lucas"],
        [43, "juan", "Juan"],
      ]),
      seccion("Histórico", "#3f5a55", [[44, "hechos", "Hechos"]]),
      seccion("Cartas Paulinas", "#e8890c", [
        [45, "romanos", "Romanos"],
        [46, "1-corintios", "1 Corintios"],
        [47, "2-corintios", "2 Corintios"],
        [48, "galatas", "Gálatas"],
        [49, "efesios", "Efesios"],
        [50, "filipenses", "Filipenses"],
        [51, "colosenses", "Colosenses"],
        [52, "1-tesalonicenses", "1 Tesalonicenses"],
        [53, "2-tesalonicenses", "2 Tesalonicenses"],
        [54, "1-timoteo", "1 Timoteo"],
        [55, "2-timoteo", "2 Timoteo"],
        [56, "tito", "Tito"],
        [57, "filemon", "Filemón"],
      ]),
      seccion("Cartas Generales", "#c9501e", [
        [58, "hebreos", "Hebreos"],
        [59, "santiago", "Santiago"],
        [60, "1-pedro", "1 Pedro"],
        [61, "2-pedro", "2 Pedro"],
        [62, "1-juan", "1 Juan"],
        [63, "2-juan", "2 Juan"],
        [64, "3-juan", "3 Juan"],
        [65, "judas", "Judas"],
        [66, "apocalipsis", "Apocalipsis", "#7a2a0e"], // color propio
      ]),
    ],
  },
  {
    nombre: "Antiguo Testamento",
    secciones: [
      seccion("Pentateuco", "#5b7b66", [
        [1, "genesis", "Génesis"],
        [2, "exodo", "Éxodo"],
        [3, "levitico", "Levítico"],
        [4, "numeros", "Números"],
        [5, "deuteronomio", "Deuteronomio"],
      ]),
      seccion("Libros Históricos", "#7b8a2e", [
        [6, "josue", "Josué"],
        [7, "jueces", "Jueces"],
        [8, "rut", "Rut"],
        [9, "1-samuel", "1 Samuel"],
        [10, "2-samuel", "2 Samuel"],
        [11, "1-reyes", "1 Reyes"],
        [12, "2-reyes", "2 Reyes"],
        [13, "1-cronicas", "1 Crónicas"],
        [14, "2-cronicas", "2 Crónicas"],
        [15, "esdras", "Esdras"],
        [16, "nehemias", "Nehemías"],
        [17, "ester", "Ester"],
      ]),
      seccion("Poéticos", "#4a3f10", [
        [18, "job", "Job"],
        [19, "salmos", "Salmos"],
        [20, "proverbios", "Proverbios"],
        [21, "eclesiastes", "Eclesiastés"],
        [22, "cantares", "Cantar de los Cantares"],
      ]),
      seccion("Profetas Mayores", "#2e4a46", [
        [23, "isaias", "Isaías"],
        [24, "jeremias", "Jeremías"],
        [25, "lamentaciones", "Lamentaciones"],
        [26, "ezequiel", "Ezequiel"],
        [27, "daniel", "Daniel"],
      ]),
      seccion("Profetas Menores", "#e8890c", [
        [28, "oseas", "Oseas"],
        [29, "joel", "Joel"],
        [30, "amos", "Amós"],
        [31, "abdias", "Abdías"],
        [32, "jonas", "Jonás"],
        [33, "miqueas", "Miqueas"],
        [34, "nahum", "Nahúm"],
        [35, "habacuc", "Habacuc"],
        [36, "sofonias", "Sofonías"],
        [37, "hageo", "Hageo"],
        [38, "zacarias", "Zacarías"],
        [39, "malaquias", "Malaquías"],
      ]),
    ],
  },
];

// Búsqueda rápida por slug (para la vista de detalle)
export const librosPorSlug = new Map(
  testamentos.flatMap((t) =>
    t.secciones.flatMap((s) =>
      s.libros.map((l) => [
        l.slug,
        {
          ...l,
          testamento: t.nombre,
          seccion: s.nombre,
          seccionColor: s.color,
        },
      ]),
    ),
  ),
);
