#!/bin/bash

# Собираем приложение
npm run build

# Переходим в директорию сборки
cd build

# Инициализируем репозиторий Git
git init

# Добавляем все файлы
git add .

# Создаем коммит
git commit -m "Auto-deploy"

# Добавляем удаленный репозиторий GitHub (замените <username> и <repository> на свои значения)
git remote add origin https://github.com/olegurcenko/bez_granic.git

# Отправляем изменения в ветку "build"
git push -f origin HEAD:build

# Удаляем временную директорию сборки (опционально)
cd ..
rm -rf build