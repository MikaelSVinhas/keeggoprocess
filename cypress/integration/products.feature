Feature: Validação da API de produtos

  Scenario Outline: Buscar produto com sucesso
    Given que eu faça uma requisição GET para o endpoint de produtos com o id "<id>"
    Then a resposta deve ter o status code "<status>"
    And as informações do produto, devem estar de acordo

    Examples:
      | id     | status |
      |  1     |    200 |

  Scenario Outline: Buscar produto com id invalido/incorreto
    Given que eu faça uma requisição GET para o endpoint de produtos com o id "<id>"
    Then a resposta deve ter o status code "<status>"
    And valido a mensagem de erro retornada

    Examples:
      | id    | status |
      |  1556 |    404 |
