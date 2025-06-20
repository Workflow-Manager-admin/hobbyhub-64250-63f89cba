#!/bin/bash
cd /home/kavia/workspace/code-generation/hobbyhub-64250-63f89cba/hobbyhub_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

