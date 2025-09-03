# Roteiro 4 –  Deploy no GitHub Pages

---

## 1) Setup inicial do repositório
1. **Clonar**:
   ```bash
   #Criar novo repositório My-Head
   git clone ...
   cd <repo>
   ```
2. **Adicionar Template PR**:
   ```text
   .
   └─ .github/
      └─ PULL_REQUEST_TEMPLATE.md
   ```


### Sugestão de `PULL_REQUEST_TEMPLATE.md`
```md
## Objetivo
-

## Mudanças
-



## Checklist
- [ ] Testes locais / build ok
- [ ] Atualizei README 
- [ ] Sem warnings no console 
```



## 2) Personalizar index.html
-  Evitar commitar a main e dar push
-  Lembre-se boas prática sempre usar PR para dar merge na main
- Para publicar sua página no github siga o [TUTORIAL](https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)


