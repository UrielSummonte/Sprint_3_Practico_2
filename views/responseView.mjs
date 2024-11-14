export function renderizarSuperheroe(superheroe) {
  return {
    "Nombre Superhéroe" : superheroe.nombreSuperHeroe,
    "Nombre Real": superheroe.nombreReal,
    "Nombre Sociedad": superheroe.nombreSociedad,
    Edad: superheroe.edad,
    "Planeta Origen": superheroe.planetaOrigen,
    Debilidad: superheroe.debilidad,
    Poderes: superheroe.poderes,
    "Habilidad Especial": superheroe.habilidadEspecial,
    Aliados: superheroe.aliados,
    Enemigos: superheroe.enemigos,
    Creador: superheroe.creador
  };
}

export function renderizarListaSuperheroes(superheroes) {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}