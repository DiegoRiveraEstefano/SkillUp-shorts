#!/usr/bin/env bash
# Extensión de origen (ej. mkv, avi, mov)
src_ext="mp4"
# Extensión de salida
out_ext="avi"

for f in video-*.${src_ext}; do
    [ -e "$f" ] || continue          # Salta si no hay coincidencias
    echo "Convirtiendo $f ..."
    ffmpeg -i "$f" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "${f%.*}.${out_ext}"
done
echo "Conversión completada."