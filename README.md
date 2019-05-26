Add a mime type by ccreating (or updating) the following files:


nextcloud/config/mimetypealiases.json:
```json
{
	"application/vnd.geo+json": "location"
}
```

nextcloud/config/mimetypemapping.json:
```json
{
        "geojson": ["application/vnd.geo+json"]
}
```

Then run
```sh
$ sudo -u www-data php occ maintenance:mimetype:update-js
$ sudo -u www-data php occ maintenance:mimetype:update-db
```

