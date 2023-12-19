# app-feedback-notifier
[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)

Feedback notifications for apps.

## Requirement
- Enable Google Apps Script API: https://script.google.com/home/usersettings
- Set the environment variable SCRIPT_ID to the ID of your existing or newly created Google Script project

## clasp login

```sh
clasp login
```
Access the URL displayed to authenticate the clasp.

```sh
docker exec -it app-feedback-notifier curl "http://localhost:43031/?code=..."
```
Accessing callback URLs from within containers.

## Shutdown

```sh
docker compose -p app-feedback-notifier_devcontainer -f .devcontainer/docker-compose.yml down
```

Stop by specifying the project name and file.