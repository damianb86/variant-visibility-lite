# Acceptance criteria

- AC-001: Given la app esta instalada, When el merchant abre App Home, Then ve el dashboard con estado general, metricas, proximo paso y navegacion embebida.
- AC-002: Given no hay datos sincronizados, When se abre el dashboard, Then se muestra empty state accionable sin errores tecnicos.
- AC-003: Given faltan permisos, When el loader detecta scopes incompletos, Then la UI muestra permission error con scopes faltantes y sin exponer tokens.
- AC-004: Given una accion con datos invalidos, When el merchant envia el formulario, Then se muestran validation errors asociados a campos.
- AC-005: Given Shopify Admin API devuelve errors top-level, When el servidor procesa la respuesta, Then la app muestra error state y registra solo metadata no sensible.
- AC-006: Given Shopify Admin API devuelve userErrors, When una mutacion falla parcialmente, Then la app muestra mensajes claros y no marca la accion como exitosa.
- AC-007: Given la sesion expiro, When authenticate.admin falla, Then React Router/App Bridge maneja reauth sin mostrar datos protegidos.
- AC-008: Given una tienda con muchos datos, When se ejecuta un listado, Then se usa paginacion por cursor y no se bloquea la UI.
- AC-009: Given viewport narrow, When el merchant navega por las pantallas, Then tablas y cards siguen legibles sin solapamientos.
- AC-010: Given navegacion por teclado, When se recorren formularios y botones, Then el foco es visible y los inputs tienen labels.
