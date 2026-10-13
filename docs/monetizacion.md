# Monetización — preparación técnica, sin activación

Borrador, 2026-10-13. No existe aprobación de AdSense ni CMP verificada. PUBLIC_ENABLE_ADS=false; IDs vacíos. No se carga ningún script de publicidad o analítica. El módulo optional-services deniega permiso sin adaptador verificado y configuración; no incorpora un cargador de etiquetas. Una bandera no acredita cumplimiento legal.

Antes de implementar ese cargador: revisión humana del titular, ID real, aprobación AdSense y CMP certificada de Google con integración TCF verificada. Registrar señales y denegar por defecto. Diferenciar anuncios personalizados/no personalizados según política y señales efectivas; no interpretar rechazo como permiso para anuncios no personalizados. Reabrir preferencias mediante la API del proveedor: reopenPreferences devuelve false mientras no exista adaptador.

Fuentes consultadas 2026-10-13: https://support.google.com/adsense/answer/13554116?hl=es y https://support.google.com/adsense/answer/7299563?hl=es. Revalidar antes de implementar o publicar.

Search Console: verificar propiedad con el titular y enviar sitemap solo tras publicación autorizada. GA4: propiedad real, CMP e integración revisada; no almacenar valores introducidos, URLs con parámetros ni datos personales en eventos. calculatorEvent prepara únicamente nombre de evento y herramienta; no envía datos.

ads.txt no se genera sin editor real. Tras aprobación, incorporar únicamente la línea proporcionada por AdSense y verificar titular e ID en revisión humana. Futuro emplazamiento: tras explicación de resultado, separado del formulario, sin superposiciones ni clics inducidos. No hay slots activos ni tráfico artificial.
