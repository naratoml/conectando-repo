# Manejo de ramas
* traer los cambios de la nube
  ``git fetch``
* ver la última rama actualizada
  ``git branch --remotes --sort=-committerdate``
* actualizar rama local con los cambios en el servidor
  ``git merge origin/develop``
* crea un commit de merge
 ``git merge --no-ff dev_funcionalidad``
* ramas sin mergear
  ``git branch --no-merged develop``

# Visualización
* GUI
  ``gitk``
* todo el árbol de historia, con todas las ramas, bonito
  ``git log --pretty=oneline --graph --decorate --all``
* commits sobre la rama principal
  ``git log --first-parent``
* mostrar logs entre fechas 
  git log --after="2021-03-30 00:00" --before="2021-03-30 23:59" --decorate --graph
* historia del archivo
  ``git log --follow archivo``
* mostrar historia de una linea 
  ``git log -L '/the line from your file/,+1:path/to/your/file.txt'``

# Creación de nota de instalación
* Mostrar archivos tocados
  ``git diff --name-only develop``
* Ver los procedimientos almacenados
  ``git diff --name-only develop | grep backend/database``
* Ver los cambios al rest
  ``git diff --name-only develop | grep backend/rest``

# Instalación en mysql
  Une todos los sp en un único archivo y realiza el vuelco
```bash
  git diff --name-only develop | grep sql | xargs cat > all.sql
  mysql -A --host=10.20.8.25 --user={user} --password={password} --comments {database} < all.sql
```
