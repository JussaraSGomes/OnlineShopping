Feature: Cadastro de novo usuário para login

Scenario: Realizar o Login com sucesso
Given usuário acessa o link do Shopping Online
	And site é carregado corretamente
When usuário clica no botão 'User'
	And preenche os campos  com dados já cadastrados
	And botão 'SIGN IN' deve ser habilitado
Then usuário deve clicar no botão 'SIGN IN'		
	And apresentar o nome cadastrado ao lado do botão 'User'
