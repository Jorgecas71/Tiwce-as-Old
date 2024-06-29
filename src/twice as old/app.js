function calculateDoubleAge() {
    const fatherAge = parseInt(document.getElementById('fatherAge').value);
    const childAge = parseInt(document.getElementById('childAge').value);

    if (isNaN(fatherAge) || isNaN(childAge) || fatherAge <= childAge) {
        document.getElementById('result').innerText = "Por favor, ingrese edades válidas (la edad del padre debe ser mayor que la del hijo).";
        return;
    }

    const yearsUntilDouble = fatherAge - 2 * childAge;
    let result = "";

    if (yearsUntilDouble > 0) {
        result = `En ${yearsUntilDouble} años, el padre tendrá el doble de la edad del hijo.`;
    } else if (yearsUntilDouble < 0) {
        result = `Hace ${Math.abs(yearsUntilDouble)} años, el padre tenía el doble de la edad del hijo.`;
    } else {
        result = "El padre actualmente tiene el doble de la edad del hijo.";
    }
    document.getElementById('result').innerText = result;

}
