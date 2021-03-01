function filterCarsByName(carsList, searchTerm) {
  if (!searchTerm) {
    return carsList;
  }

  return carsList.filter(item => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
}

function sortCarsByNameAsc(a, b) {
  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();

  if (nameA < nameB) {    
      return -1;
  } else if (nameA > nameB) {
      return 1;
  }

  return 0;
}

function sortCarsByNameDesc(a, b) {
  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();

  if (nameA < nameB) {
      return 1;
  } else if (nameA > nameB) {
      return -1;
  }

  return 0;
}

export {
  filterCarsByName,
  sortCarsByNameAsc,
  sortCarsByNameDesc,
};
