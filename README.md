# seene-shelter

## Idea

One-page Web 2.0 project without backend.

Dropbox for backend and local storage for list of friends to follow.

List of all users to be kept inside this app, manually in format:

 user -> her public dropbox folder 

## Design

TODO

Useful hint: [this link](seene://capture) opens Seene app in capture mode (if it was open before; if not -- just opens the app)

### Reasons

Dropbox is chosen because it is 
* sufficiently well-known, people might already have an account there
* free account of 2Gb is enough for about 2K of Seenes, older stuff can be removed or moved to separate account
* has good API
* has public links
* has comments on public links web and in mobile app (one need Dropbox account to write a comment)
* has convenient ways of uploading from mobile device (including auto-upload)

Google Drive has no comments on public folders.

## Investigations of Dropbox API

[Test public folder](https://www.dropbox.com/sh/1h3zy9jm4nftelm/AABAdhug5I_8NO8z5-N1lpVOa).
Created a dedicated Dropbox user "alexander.petrossian+seene-shelter@gmail.com".
Created an app "seene-shelter" there, [keys](auth.sh)
Created [access token](auth.sh) (TODO: figure out how to make that permanent, if that is needed).

### List of public folder
````
rualpe-ws:seene-dropbox-experiments paf$ . auth.sh
rualpe-ws:seene-dropbox-experiments paf$ curl -s -d "client_id=$client_id&client_secret=$client_secret&link=https://www.dropbox.com/sh/1h3zy9jm4nftelm/AABAdhug5I_8NO8z5-N1lpVOa&list=true"   -XPOST https://api.dropbox.com/1/metadata/link |jq .
{
  "size": "0 bytes",
  "hash": "5526fb155166f0bb7d8a32299066c24d",
  "folder_name": "Seene",
  "rev": "a0e701eb8142",
  "thumb_exists": false,
  "bytes": 0,
  "modified": "Fri, 05 Aug 2016 11:20:32 +0000",
  "visibility": "PUBLIC",
  "in_dropbox": false,
  "link": "https://www.dropbox.com/sh/1h3zy9jm4nftelm/AABAdhug5I_8NO8z5-N1lpVOa?dl=0",
  "link_type": "SHARED_LINK",
  "path": null,
  "is_dir": true,
  "icon": "folder",
  "root": "link",
  "contents": [
...
    {
      "rev": "a0ea01eb8142",
      "thumb_exists": true,
      "path": "/seene_20151129_soPmmF.jpg",
      "is_dir": false,
      "client_mtime": "Fri, 05 Aug 2016 11:21:36 +0000",
      "icon": "page_white_picture",
      "bytes": 692951,
      "modified": "Fri, 05 Aug 2016 11:24:39 +0000",
      "size": "676.7 KB",
      "root": "link",
      "mime_type": "image/jpeg"
    },
    {
      "rev": "a0f301eb8142",
      "thumb_exists": true,
      "path": "/seene_20160724_ypLCSx.jpg",
      "is_dir": false,
      "client_mtime": "Tue, 02 Aug 2016 18:56:06 +0000",
      "icon": "page_white_picture",
      "bytes": 1050528,
      "modified": "Fri, 05 Aug 2016 20:00:51 +0000",
      "size": "1 MB",
      "root": "link",
      "mime_type": "image/jpeg"
    }
  ]
}
rualpe-ws:seene-dropbox-experiments paf$
```

### Content of public folder file (name from list)

```
rualpe-ws:seene-dropbox-experiments paf$ . auth.sh
rualpe-ws:seene-dropbox-experiments paf$ curl -X POST https://content.dropboxapi.com/2/sharing/get_shared_link_file     —header "Authorization: Bearer $bearer"     —header "Dropbox-API-Arg: {\"url\": \"https://www.dropbox.com/sh/1h3zy9jm4nftelm/AABAdhug5I_8NO8z5-N1lpVOa\",\"path\": \"/seene_20160724_ypLCSx.jpg\"}" > /tmp/seene_20160724_ypLCSx.jpg
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 1025k  100 1025k    0     0  43576      0  0:00:24  0:00:24 —:--:—  119k
rualpe-ws:seene-dropbox-experiments paf$ open /tmp/seene_20160724_ypLCSx.jpg
rualpe-ws:seene-dropbox-experiments paf$
```
