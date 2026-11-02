import { useEffect, useRef, useState, type ImgHTMLAttributes, type MouseEvent } from 'react';
import { ArrowLeft, ChevronDown, Download, X } from 'lucide-react';

export type Media = { url: string; title: string; kind: 'image' | 'pdf' };

export function mediaKind(href: string): Media['kind'] | undefined {
  const path = href.split(/[?#]/)[0];
  if (/\.pdf$/i.test(path)) return 'pdf';
  if (/\.(png|jpe?g|webp|gif|svg|avif|ico)$/i.test(path)) return 'image';
}

export function useMediaViewer() {
  const [media, setMedia] = useState<Media | null>(null);
  function capture(event: MouseEvent<HTMLDivElement>) {
    const target = event.target;
    if (!(target instanceof Element) || target.closest('dialog')) return;
    const anchor = target.closest<HTMLAnchorElement>('a[href]');
    const img = target.closest<HTMLImageElement>('img');
    const href = anchor?.getAttribute('href') || img?.getAttribute('src');
    if (!href || anchor?.hasAttribute('download')) return;
    const kind = mediaKind(href);
    if (!kind) return;
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) return;
    event.preventDefault();
    event.stopPropagation();
    setMedia({ url: url.href, kind, title: anchor?.getAttribute('aria-label') || img?.alt || anchor?.textContent?.replace('↗','').trim() || 'Document' });
  }
  return { capture, viewer: <MediaViewer media={media} onClose={() => setMedia(null)} /> };
}

export function MediaImage({alt, linked = false, ...props}: ImgHTMLAttributes<HTMLImageElement> & {linked?:boolean}) {
  if (linked) return <img {...props} alt={alt} />;
  return <img {...props} alt={alt} tabIndex={0} role="button" aria-label={`Enlarge ${alt || 'image'}`} onKeyDown={event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); event.currentTarget.click(); }
  }} />;
}

function MediaViewer({media,onClose}:{media:Media|null;onClose:()=>void}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    if (!media || !element) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    element.showModal();
    return () => { element.close(); document.body.style.overflow = overflow; if (previousFocus?.isConnected) previousFocus.focus(); else document.querySelector<HTMLButtonElement>('.resume-link')?.focus(); };
  }, [media]);
  return <dialog ref={dialog} className="media-viewer" aria-label={media?.title || 'Media viewer'} onCancel={event=>{event.preventDefault();onClose();}} onClick={event=>{if(event.target===event.currentTarget)onClose();}}>
    {media && <><div className="viewer-toolbar"><button autoFocus onClick={onClose}><ArrowLeft size={18}/> Back to website</button><p>{media.title}</p><a href={media.url} download><Download size={18}/><span>Download</span></a><button className="viewer-close" onClick={onClose} aria-label="Close viewer"><X size={21}/></button></div>
      <div className={`viewer-content viewer-${media.kind}`}>{media.kind === 'pdf' ? <iframe src={media.url} title={media.title} /> : <img src={media.url} alt={media.title}/>}</div>
    </>}
  </dialog>;
}

export function ResumeMenu() {
  const [open,setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if (!open) return;
    const outside = (event: PointerEvent)=>{if(!root.current?.contains(event.target as Node))setOpen(false);};
    const escape = (event: KeyboardEvent)=>{if(event.key==='Escape'){setOpen(false);root.current?.querySelector('button')?.focus();}};
    document.addEventListener('pointerdown',outside); document.addEventListener('keydown',escape);
    return ()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape);};
  },[open]);
  return <div className="resume-menu" ref={root} onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)} onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget))setOpen(false);}}>
    <button className="resume-link" aria-expanded={open} aria-controls="resume-choices" onClick={()=>setOpen(true)}>Résumé <ChevronDown size={14}/></button>
    {open&&<div className="resume-choices" id="resume-choices"><p>Choose a résumé</p>{[['1 page','resume-1-page.pdf'],['2 page','resume-2-page.pdf'],['Extended','resume-extended.pdf']].map(([label,file])=><a href={'/documents/'+file} key={file} aria-label={`${label} résumé`}>{label}</a>)}</div>}
  </div>;
}
