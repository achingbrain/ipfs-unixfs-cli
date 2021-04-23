# ipfs-unixfs-cli

Parses piped data as UnixFs metadata and prints it out as a json string.

```console
$ jsipfs object data QmfJMCvenrj4SKKRc48DYPxwVdS44qCUCqqtbqhJuSTWXP | unixfs
{
  "type": "file",
  "blockSizes": [],
  "mode": 420
}
```
