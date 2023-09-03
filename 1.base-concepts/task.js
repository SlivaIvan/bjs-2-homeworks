function solveEquation(a, b, c) {
	let arr = [];

	const discriminant = Math.pow(b, 2) - 4 * a * c;

	if (discriminant > 0) {
		const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
		const rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
		 arr.push(rootOne, rootTwo);
	} else if (discriminant === 0) {
		const root = -b / (2 * a);
		 arr.push(root);
	} else {
		arr = [];
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	//Преобразуйте процентную ставку из диапазона от 0 до 100 в диапазон от 0 до 1 и из годовой ставки — в месячную.
	const monthlyPercent = percent / 100 / 12;

	//Посчитайте тело кредита — сумму, которую нужно вернуть банку (сумма кредита минус первоначальный взнос).
	const loanBody = amount - contribution;

	//Ежемесячная оплата рассчитывается по формуле: Платёж = S * (P + (P / (((1 + P)^n) - 1))), где: S — тело кредита, P — 1/12 процентной ставки (от 0 до 1), n — количество месяцев, ^ — возведение в степень. Для возведения в степень используйте оператор — ** или функцию Math.pow.
	const payment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)))

	const remainingDebt = (payment * countMonths).toFixed(2);

	return Number(remainingDebt);

}