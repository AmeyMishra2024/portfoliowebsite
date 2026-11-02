import concurrent.futures, hashlib, json, pathlib, urllib.request, shutil, time
entries=json.loads(pathlib.Path('scripts/november-assets.json').read_text())
def fetch(entry):
    path=pathlib.Path(entry['path'])
    url='https://alpha.ameymishra.com/'+entry['path'].removeprefix('public/')
    for attempt in range(4):
        try:
            data=urllib.request.urlopen(url,timeout=90).read()
            if hashlib.sha256(data).hexdigest()!=entry['sha256']:
                raise ValueError('Media checksum mismatch: '+str(path))
            path.parent.mkdir(parents=True,exist_ok=True)
            path.write_bytes(data)
            return
        except Exception:
            if attempt==3: raise
            time.sleep(2)
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
    list(pool.map(fetch,entries))
print('Verified and imported',len(entries),'media files')
