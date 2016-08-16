# seene-shelter

## Idea

One-page Web 2.0 project without backend.

Dropbox for backend and local storage for list of friends to follow.

List of all users to be kept inside this app, manually in format:

 user -> her public dropbox folder 

Original JavaScript viewer with small changes can be used to show content.

## Progress

| What                           | Status  |
| -------------------------------|---------|
| Design the web app             | TODO    |
| Viewer to work separately      | TODO    |
| Viewer to accept export format | TODO    |
| Implement the web app          | TODO    |
| Get good domain name           | TODO    |
| Host the web app               | TDOO    |
| Dropbox API                    | DONE    |

## Design outline

TODO

Useful hint: "seene://capture" opens Seene app in capture mode (if it was open before; if not -- just opens the app)

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

[here](dropbox.md)
