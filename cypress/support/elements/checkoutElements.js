class checkoutElements {
  iptFirstName = () => { return '#first-name' }
  iptLastName = () => { return '#last-name' }
  iptAddress = () => { return '#address' }
  iptNumber = () => { return '#number' }
  iptZipCode = () => { return '#cep' }
  iptPhone = () => { return '#phone' }
  iptEmail = () => { return '#email' }
  lblPaymentMethod = () => { return 'label.form-check-label' }
  chkPaymentMethod = () => { return 'input[name="payment-method"]' }
  chkTerms = () => { return '#terms' }
  lblRequired = () => { return 'div.alert-danger' }
  divOrderNumber = () => { return 'main.container div#order-status p strong' }
}

export default checkoutElements;