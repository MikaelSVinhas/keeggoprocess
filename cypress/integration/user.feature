Feature: Validação da API usuários

  Scenario: Criar um usuário com sucesso
    Given que eu faça uma requisição POST para o endpoint de usuários
    Then a resposta deve ter o status code 201
    And a mensagem de sucesso deve ser exibida juntamente com o id