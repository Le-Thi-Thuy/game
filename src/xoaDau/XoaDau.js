function xoadau(str) {
    str = str.replace(/\s/g, '');
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export default xoadau;