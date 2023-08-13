

export interface DataCarProps {
  car: {
    id: number;
    img: string;
    marca: string;
    modelo: string;
    ano: number;
    preco: number;
    motor: string;
    cambio: string;
    flex: boolean;
    passageiros: number;
    ar_condicionado: boolean;
    porta: number;
  };

}

export function dataCarController({ car }: DataCarProps) {
  function handleSendMessage() {
    const phoneNumber = '27999814325'; // Substitua pelo número de telefone desejado
    const message = encodeURIComponent(`
      Olá! Estou interessado em alugar o carro ${car.modelo} ${car.marca} ${car.ano} ${car.porta} portas.
    `);
    console.log('car', car)
    // Montar a URL do WhatsApp com o número de telefone e mensagem
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    // Redirecionar o usuário para a URL do WhatsApp
    window.location.href = whatsappUrl;
    console.log('Ta caindo?')
  }
  return { handleSendMessage }
}
