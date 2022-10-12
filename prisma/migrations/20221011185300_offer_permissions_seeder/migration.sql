INSERT INTO public."Permission" (id, code, title, "createdAt", "updatedAt") values (13, 'offers_create', 'Добавление заявок', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO public."Permission" (id, code, title, "createdAt", "updatedAt") values (14, 'offers_read', 'Просмотр заявок', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO public."Permission" (id, code, title, "createdAt", "updatedAt") values (15, 'offers_update', 'Редактирование заявок', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO public."Permission" (id, code, title, "createdAt", "updatedAt") values (16, 'offers_delete', 'Удаление заявок', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO public."_PermissionToRole" ("A", "B") values (13, 1);
INSERT INTO public."_PermissionToRole" ("A", "B") values (14, 1);
INSERT INTO public."_PermissionToRole" ("A", "B") values (15, 1);
INSERT INTO public."_PermissionToRole" ("A", "B") values (16, 1);