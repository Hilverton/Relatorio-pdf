export default function converter(num: string) {
  num = num.replace(/[.]/g, '').replace(/[,]/g, '.')

  num = num.replace('R$ ', '')

  return parseFloat(num).toFixed(2)
}
