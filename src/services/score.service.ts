const getScore = (rut: string): number => {
  const normalized = rut.replace(/[\.\-]/g, "").toLowerCase();

  let hash = 5381;
  for (let i = 0; i < normalized.length; i++) {
    hash = (hash << 5) + hash + normalized.charCodeAt(i);
    hash = hash & hash;
  }

  return Math.abs(hash) % 101;
};

export { getScore };
