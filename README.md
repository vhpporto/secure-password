## Secure Password

Este é um serviço simples que determina se uma senha é segurura ou não, de acordo com os requisitos abaixo. Este desafio faz parte do repositório [backend-br](https://github.com/backend-br).

## Requisitos

- Verificar se a senha possui pelo menos 08 caracteres.
- Verificar se a senha contém pelo menos uma letra maiúscula.
- Verificar se a senha contém pelo menos uma letra minúscula.
- Verificar se a senha contém pelo menos um dígito numérico.
- Verificar se a senha contém pelo menos um caractere especial (e.g, !@#$%).

## Como rodar o projeto

1 - Clone o repositório para sua máquina local:

```bash
git clone https://github.com/vhpporto/secure-password
```

2 - Instale as dependências:

```bash
cd secure-password
yarn
```

3 - Execute o projeto

```bash
yarn dev
```

O serviço estará rodando em http://localhost:3000.

## Uso

Faça uma chamada POST para o endpoint /secure-password com o seguinte corpo:

```json
{
  "password": "yourPassword"
}
```

Se a senha atender a todos os critérios de segurança, então, seu serviço deve retornar uma resposta de sucesso.

```
HTTP/1.1 400 Bad Request
```

Caso contrário, será retornado o código abaixo com a respectiva mensagem de erro

```
HTTP/1.1 400 Bad Request
```

```json
{
  "result": "The password must contain at least 8 caracteres"
}
```
