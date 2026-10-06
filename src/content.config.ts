import { defineCollection } from 'astro:content';
import { z } from 'astro/zod'
import { glob } from 'astro/loaders';

const libros = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/libros' }),
  schema: z.object({
    titulo: z.string(),
    fuente: z.string().optional(),
    datos_bibliograficos: z
      .object({
        autor: z.string().optional(),
        destinatarios: z.string().optional(),
        fecha: z.string().optional(),
        lugar: z.string().optional(),
        estructura: z.string().optional(),
        ubicacion: z.string().optional(),
      })
      .passthrough()
      .default({}),
    contexto_historico: z.string().optional(),
    personajes: z
      .array(
        z.object({
          'url-img': z.string().optional(),
          nombre: z.string(),
          descripcion: z.string(),
        })
      )
      .default([]),
    contenido: z.string().optional(),
    sintesis: z.string().optional(),
    bosquejo: z
      .array(
        z.object({
          'url-img': z.string().optional(),
          seccion: z.string(),
          descripcion: z.string(),
        })
      )
      .default([]),
    versiculo_clave: z
      .object({ texto: z.string(), pasaje: z.string() })
      .optional(),
  }),
});

export const collections = { libros };