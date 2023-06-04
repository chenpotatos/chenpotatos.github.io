/*! bootstrap-notes v0.1.0 2016-08-04 */ ! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : window.jQuery && a(window.jQuery)
}(function(a) {
    var b = function(b, c) {
        var d = this,
            e = a(b);
        d._el = b, d._opt = c, d._type = 0, d._which = 0, d._locales = e.data("locales").split(","), e.on("show.bs.modal", a.proxy(d._show, d)).on("hidden.bs.modal", a.proxy(d._hidden, d)).on("shown.bs.modal", a.proxy(d._shown, d)).on("click", ".modal-footer .btn", a.proxy(d._click, d))
    };
    b.prototype = {
        alert: function(b, c) {
            var d = this,
                e = d._el,
                f = d._locales;
            a(".modal-title", e).text(c || f[0]), a(".modal-body p", e).html(b), d._type = 1, a(e).modal("show")
        },
        confirm: function(b, c, d) {
            var e = this,
                f = e._el,
                g = e._locales;
            e._type = 3, e._callback = c, a(".modal-title", f).text(d || g[1]), a(".modal-body p", f).html(b), a(f).modal("show")
        },
        prompt: function(b, c, d, e) {
            var f = this,
                g = f._el,
                h = f._locales;
            f._type = 4, f._callback = c, a(".modal-title", g).text(d || h[2]), a(".modal-body label", g).text(e || ""), a(".modal-body input", g).val(b), a(g).modal("show")
        },
        _show: function() {
            var b = this;
            1 === (1 & b._type) ? a(".modal-body p", b._el).removeClass("hidden") : a(".modal-body p", b._el).addClass("hidden"), 1 === b._type ? a(".modal-footer", b._el).addClass("hidden") : a(".modal-footer", b._el).removeClass("hidden"), 4 === (4 & b._type) ? (a(".modal-body .form-group", b._el).removeClass("hidden"), a(".modal-footer .btn[data-which=-1]", b._el).addClass("hidden")) : (a(".modal-body .form-group", b._el).addClass("hidden"), a(".modal-footer .btn[data-which=-1]", b._el).removeClass("hidden"))
        },
        _shown: function() {
            var b = this;
            4 === (4 & b._type) && a(".modal-body input", b._el).focus()
        },
        _hidden: function() {
            var b = this,
                c = b._el;
            if ("function" == typeof b._callback) {
                var d;
                4 === (4 & b._type) && (d = a(".modal-body input", c).val()), b._callback(b._which, d)
            }
            b._which = 0, delete b._callback
        },
        _click: function(b) {
            var c = this,
                d = a(b.target),
                e = d.data("which");
            c._which = e
        }
    }, a.fn.msgbox = function(c) {
        var d = arguments;
        return this.each(function() {
            var e = a(this),
                f = e.data("msgbox"),
                g = "object" == typeof c ? c : {};
            f || "string" == typeof c ? "string" == typeof c && f[c].apply(f, Array.prototype.slice.call(d, 1)) : e.data("msgbox", new b(this, g))
        })
    }
}); /*! bootstrap-notes v0.1.0 2016-08-04 */
! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : window.jQuery && a(window.jQuery)
}(function(a) {
    var b = function(a, b) {
        var c = this;
        c._el = a, c._opt = b
    };
    b.prototype = {
        constructor: b,
        data: function(a) {
            var b = this,
                c = b._opt;
            return a ? void c.data(a) : c.data()
        }
    }, a.fn.ntadapter = function(c) {
        var d = arguments;
        return this.each(function() {
            var e = a(this),
                f = e.data("ntadapter"),
                g = "object" == typeof c ? c : {};
            f || "string" == typeof c ? "string" == typeof c && f[c].apply(f, Array.prototype.slice.call(d, 1)) : e.data("ntadapter", new b(this, g))
        })
    }
}); /*! bootstrap-notes v0.1.0 2016-08-04 */
! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "js-shortid"], a) : "object" == typeof exports ? a(require("jquery"), require("js-shortid")) : window.jQuery && a(window.jQuery, window.shortid || {
        gen: function() {
            for (var a = (new Date).getTime(); a === (new Date).getTime(););
            return (new Date).getTime()
        }
    })
}(function(a, b) {
    var c = function(b, c) {
        var d = this;
        d._el = b, d._opt = c, d._seq = 1, d._msgbox = c.msgbox;
        var e = a(b).on("click", "a", a.proxy(d._selectTab, d)),
            f = a(".notes-tab-menu", e.parent());
        f.length > 0 && (d._ctxMenu = f[0], e.on("contextmenu", "li[data-note-uid]", a.proxy(d._contextmenu, d)), f.on("click", "a", a.proxy(d._ctxMenuClick, d)))
    };
    c.prototype = {
        constructor: c,
        create: function(c, d) {
            var e = this,
                f = a(e._el),
                g = c;
            a.isArray(c) || (g = [c]);
            for (var h = 0; h < g.length; h++) g[h].uid || (g[h].uid = b.gen()), f.trigger("create.bs.tab", g[h]), e._create(g[h], d)
        },
        _create: function(b, c) {
            var d = this,
                e = d.activeUid(),
                f = a(d._el),
                g = a('<li data-note-uid="' + b.uid + '"><a href="#" data-toggle="tab" title="' + (b.path || b.name) + '"><i class="glyphicon glyphicon-file ' + (b.unsaved ? "text-danger" : "") + '"></i>&nbsp;<span>' + b.name + '</span><button class="btn btn-default btn-xs" aria-label="Close">&times;</button></a></li>').insertBefore(a("li", f).last());
            f.trigger("created.bs.tab", [b]), c && a("a", g).tab("show"), d.lastuid = e
        },
        _close: function(b) {
            var c = this,
                d = a(c._el),
                e = c.activeUid(),
                f = b.data("note-uid");
            b.remove(), d.trigger("closed.bs.tab", [f]), e === f && (c.lastuid && c.lastuid !== e ? a("li[data-note-uid=" + c.lastuid + "] a", d).tab("show") : a("li[data-note-uid]:first a", d).tab("show")), c.lastuid = null
        },
        closeAll: function() {
            var b = this,
                c = b._el,
                d = a("li[data-note-uid]", c),
                e = a(b._msgbox).data("msgbox");
            e.confirm("Are you sure to close all?", function(c) {
                switch (c) {
                    case 1:
                        d.each(function() {
                            b._close(a(this))
                        })
                }
            })
        },
        closeOthers: function(b) {
            var c = this,
                d = c._el,
                e = null,
                f = a(c._msgbox).data("msgbox");
            e = b ? a('li[data-note-uid]:not([data-note-uid="' + b + '"])', d) : a("li[data-note-uid]:not(.active)", d), f.confirm("Are you sure to close others?", function(b) {
                switch (b) {
                    case 1:
                        e.each(function() {
                            c._close(a(this))
                        })
                }
            })
        },
        activeUid: function() {
            return a("li.active", this._el).data("note-uid")
        },
        _selectTab: function(b) {
            var c = this,
                d = a(b.target),
                e = a(b.currentTarget),
                f = e.parent(),
                g = f.data("note-uid");
            return d.is(".btn") ? (b.preventDefault(), void c._evalClose(g)) : void(null != g && void 0 !== g && g !== -1 ? c.selectTab(g) : c.createUntitled())
        },
        selectTab: function(b) {
            var c = this,
                d = a(c._el),
                e = b.uid || b,
                f = a("li[data-note-uid=" + e + "]", d),
                g = c.activeUid();
            e !== g && (f.tab("show"), d.trigger("selected.bs.tab", [e]), c.lastuid = g)
        },
        open: function(b, c) {
            var d = this,
                e = d._el,
                f = a("li[data-note-uid=" + b.uid + "]", e);
            0 === f.size() && (f = d.createTag(b)), void 0 !== c && null != c && c !== !1 || a("a", f).tab("show")
        },
        _evalClose: function(b) {
            var c = this,
                d = a(c._el);
            d.trigger("close.bs.tab", [b]);
            var e = a._data(c._el, "events").close;
            void 0 !== e && 0 !== e.length || c.close(b)
        },
        close: function(b) {
            var c = this,
                d = c._el,
                e = b ? a("li[data-note-uid=" + (b.uid || b) + "]", d) : a("li.active", d);
            c._close(e)
        },
        doRename: function(b) {
            var c = this,
                d = c._el,
                e = b ? a("li[data-note-uid=" + b.uid + "]", d) : a("li.active", d);
            a("span", e).text(b.name)
        },
        rename: function(b) {
            var c = this,
                d = b || a("li.active", c._el),
                e = d.data("note-uid"),
                f = a(c._msgbox).data("msgbox");
            "undefined" != typeof chrome && chrome.fileSystem ? a(c._el).trigger("rename.bs.tab", [e]) : f.prompt(a("span", d).text(), function(b, d) {
                a(c._el).trigger("rename.bs.tab", [e, d, b])
            }, "Rename", "File Name")
        },
        createUntitled: function() {
            var a = this,
                b = {
                    name: "Untitled" + a._seq
                };
            return a.create(b, !0), a._seq++, b
        },
        markUnsaved: function(b, c) {
            var d = this,
                e = d._el,
                f = null;
            if (c) {
                var g = c.uid || c;
                f = a('li[data-note-uid="' + g + '"] i', e)
            } else f = a("li.active i", e);
            b ? f.is(".text-danger") && f.removeClass("text-danger") : f.is(".text-danger") || f.addClass("text-danger")
        },
        _contextmenu: function(b) {
            var c = this,
                d = b.clientX || b.offsetX || b.layerX,
                e = b.clientY || b.offsetY || b.layerY;
            a(c._ctxMenu).css({
                display: "block",
                left: d,
                top: e
            }).show(), c._ctxItem = b.currentTarget, b.preventDefault(), b.stopPropagation()
        },
        _ctxMenuClick: function(b) {
            a(b.delegateTarget).hide();
            var c = this,
                d = a(b.target),
                e = d.data("nts-cmd"),
                f = a(c._ctxItem),
                g = f.data("note-uid");
            switch (e) {
                case "close":
                    c._evalClose(g);
                    break;
                case "closeOthers":
                    c.closeOthers(g);
                    break;
                case "closeAll":
                    c.closeAll();
                    break;
                case "rename":
                    c.rename(f)
            }
        },
        hideCtxMenu: function() {
            var b = this;
            b._ctxMenu && a(b._ctxMenu).hide()
        },
        count: function() {
            return a("li[data-note-uid]", this._el).size()
        }
    }, a.fn.notestab = function(b) {
        var d = arguments;
        return this.each(function() {
            var e = this,
                f = a(e),
                g = f.data("notestab"),
                h = "object" == typeof b ? b : {};
            g || "string" == typeof b ? "string" == typeof b && g[b].apply(g, Array.prototype.slice.call(d, 1)) : f.data("notestab", new c(e, a.extend(h, f.data())))
        })
    }, a(document).on("click", function() {
        a(".notes-tab").notestab("hideCtxMenu")
    })
}); /*! bootstrap-notes v0.1.0 2016-08-04 */
! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : window.jQuery && a(window.jQuery)
}(function(a) {
    function b(a, b, c) {
        b = b || "", c = c || 512;
        for (var d = atob(a), e = [], f = 0; f < d.length; f += c) {
            for (var g = d.slice(f, f + c), h = new Array(g.length), i = 0; i < g.length; i++) h[i] = g.charCodeAt(i);
            var j = new Uint8Array(h);
            e.push(j)
        }
        var k = new Blob(e, {
            type: b
        });
        return k
    }
    var c = function() {};
    c.prototype = {
        get: function(a, b) {
            if ("undefined" != typeof chrome && chrome.storage) chrome.storage.local.get(a, function(c) {
                "function" == typeof b && b(c[a])
            });
            else {
                var c = null;
                window.localStorage && (c = window.localStorage.getItem(a)), "function" == typeof b && b(c)
            }
        },
        set: function(a, b, c) {
            if ("undefined" != typeof chrome && chrome.storage) {
                var d = {};
                d[a] = b, chrome.storage.local.set(d)
            } else window.localStorage && window.localStorage.setItem(a, b), "function" == typeof c && c()
        }
    };
    var d = new c,
        e = function(a) {
            this._opt = a, this._d = {}
        };
    e.prototype = {
        constructor: e,
        setItem: function(a, b) {
            var c = this;
            b ? c._d[a] = b : delete c._d[a]
        },
        getItem: function(a) {
            return this._d[a]
        },
        save: function(a) {
            var b = this,
                c = b._opt;
            for (var e in b._d) {
                var f = b._d[e];
                "object" != typeof f || f.d || delete b._d[e]
            }
            d.set(c.id, JSON.stringify(b._d), a)
        },
        load: function(b) {
            var c = this,
                e = c._opt;
            d.get(e.id, function(d) {
                d && "string" == typeof d && (c._d = a.parseJSON(d)), "function" == typeof b && b(c._d)
            })
        },
        find: function(a) {
            var b = this,
                c = b._d;
            for (var d in c)
                if (a(c[d], d)) return c[d]
        }
    };
    var f = function(b, c) {
        var d = this;
        d._el = b, d._opt = c, d._msgbox = c.msgbox, d._adapter = c.adapter, d._autoSaveInterval = c.autoSaveInterval || 6e5, d._initTime = (new Date).getTime(), d._store = new e({
            id: c.id || "__notes"
        });
        var f = a(".notes-tab", b).notestab({
            msgbox: c.msgbox
        }).on("closed.bs.tab", a.proxy(d._tabClosed, d)).on("close.bs.tab", a.proxy(d._tabClose, d)).on("selected.bs.tab", a.proxy(d._tabSelected, d)).on("created.bs.tab", a.proxy(d._tabCreated, d)).on("shown.bs.tab", a.proxy(d._tabShown, d)).on("rename.bs.tab", a.proxy(d._tabRename, d));
        d._notestab = f[0], d._store.load(function(b) {
            var c = [];
            for (var e in b) "__ctxUid" === e ? d._ctxUid = b[e] : c[c.length] = b[e];
            c.length > 0 ? (f.notestab("create", c), d._ctxUid ? a("a", a("li[data-note-uid=" + d._ctxUid + "]", f)).tab("show") : a("a", a("li:first", f)).tab("show")) : f.notestab("createUntitled")
        }), a(d._adapter).on("edit.ntadapter", a.proxy(d._edit, d)), a(b).on("click", "a[data-nts-cmd], button[data-nts-cmd]", a.proxy(d._cmd, d)), Mousetrap.bind(["command+t", "ctrl+t"], a.proxy(d.createTab, d)), Mousetrap.bind(["command+o", "ctrl+o"], a.proxy(d.open, d)), Mousetrap.bind(["command+s", "ctrl+s"], a.proxy(d.saveLocal, d)), Mousetrap.bind(["command+w", "ctrl+w"], a.proxy(d.close, d)), setInterval(function() {
            d.save2LocalStore()
        }, d._autoSaveInterval)
    };
    f.prototype = {
        constructor: f,
        _edit: function(b, c) {
            var d = this,
                e = d.note(d._ctxUid);
            e && e.d !== c && (e.unsaved = !0, e.d = c || a(d._adapter).data("ntadapter").data(), a(d._notestab).notestab("markUnsaved", !1, e))
        },
        _tabClose: function(a, b) {
            var c = this;
            c.close(b)
        },
        _tabClosed: function(b, c) {
            var d = this,
                e = d._store,
                f = a(d._notestab).data("notestab"),
                g = d.note(c);
            g && delete g.d, 0 === f.count() && (a(d._adapter).ntadapter("data", g), f.createUntitled()), e.setItem(c)
        },
        _tabSelected: function(b, c) {
            var d = this,
                e = d.note(c);
            d._ctxUid = c, a(d._adapter).ntadapter("data", e)
        },
        _tabCreated: function(b, c) {
            var d = this,
                e = a(d._notestab).data("notestab");
            if (e.count() > 1) {
                var f = d.note(d._ctxUid);
                !f || f.unsaved || f.d || 0 !== f.name.indexOf("Untitled") || e.close(f.uid)
            }
            d.note(c.uid, c), a(d._adapter).ntadapter("data", c)
        },
        _tabShown: function(b) {
            var c = this,
                d = a(b.target).parent().data("note-uid");
            c._ctxUid = d, a(c._adapter).ntadapter("data", c.note(d))
        },
        _tabRename: function(b, c, d) {
            var e = this,
                f = e.note(c);
            d ? (f.name = d, a(e._notestab).notestab("doRename", f)) : "undefined" != typeof chrome && chrome.storage && f.savedId && chrome.fileSystem.restoreEntry(f.savedId, function(a) {
                e._chromeSaveAs(f.name, f.d, e._chromeSaved(f, function() {
                    a.remove(function() {
                        console.log("removed")
                    })
                }))
            })
        },
        _cmd: function(b) {
            var c = this,
                d = a(b.currentTarget).data(),
                e = d.ntsCmd,
                f = a(c._notestab),
                g = f.data("notestab"),
                h = c.activeFile();
            switch (e) {
                case "save":
                    c.saveLocal();
                    break;
                case "saveas":
                    c.saveLocal({
                        uid: h.uid,
                        name: h.name,
                        d: h.d
                    }, function(a) {
                        c.note(a.uid, a)
                    });
                    break;
                case "new":
                    a(c._notestab).notestab("createUntitled");
                    break;
                case "open":
                    c.open();
                    break;
                case "close":
                    c.close();
                    break;
                case "closeOthers":
                    g.closeOthers(h.uid);
                    break;
                case "closeAll":
                    g.closeAll();
                    break;
                case "rename":
                    g.rename();
                    break;
                case "shutdown":
                    c.save2LocalStore(), "undefined" != typeof chrome && chrome.app && chrome.app.window.current().close();
                    break;
                case "maximize":
                    "undefined" != typeof chrome && chrome.app && (chrome.app.window.current().isMaximized() ? chrome.app.window.current().restore() : chrome.app.window.current().maximize());
                    break;
                case "minimize":
                    "undefined" != typeof chrome && chrome.app && chrome.app.window.current().minimize();
                    break;
                default:
                    a(c._el).trigger("cmd.nts", [b.currentTarget])
            }
        },
        note: function(a, b) {
            var c = this,
                d = c._store;
            return b ? void d.setItem(a, b) : d.getItem(a)
        },
        createTab: function() {
            var b = this,
                c = a(b._notestab);
            return c.notestab("createUntitled"), !1
        },
        open: function() {
            var b = this;
            return b.openLocal(function(c) {
                a(b._notestab).notestab("create", c, !0)
            }), !1
        },
        _chromeReadFile: function(b, c) {
            var d = this,
                e = d._store;
            return function(f) {
                chrome.fileSystem.getDisplayPath(c, function(g) {
                    var h = e.find(function(a) {
                        return console.log(a.path), g === a.path
                    });
                    if (h) a(d._notestab).notestab("selectTab", h);
                    else {
                        var i = chrome.fileSystem.retainEntry(c);
                        d._readFile(f, function(a) {
                            b({
                                name: c.name,
                                d: a.target.result,
                                path: g,
                                savedId: i
                            })
                        })
                    }
                })
            }
        },
        openLocal: function(b) {
            var c = this,
                d = c._opt.mime,
                e = a(c._msgbox).data("msgbox");
            if ("undefined" != typeof chrome && chrome.fileSystem) chrome.fileSystem.chooseEntry({
                type: "openFile",
                acceptsMultiple: !0
            }, function(a) {
                if (!chrome.runtime.lastError && a)
                    for (var d = function(a) {
                            e.alert(a)
                        }, f = 0; f < a.length; f++) a[f].file(c._chromeReadFile(b, a[f]), d)
            });
            else {
                var f = a("#_openFile");
                0 === f.length && (f = a('<input type="file" name="file" multiple />')), f.on("change", a.proxy(c._loadLocal, c)).on("load", function(c, e, f, g) {
                    "string" == typeof e && /json/i.test(d) && (e = a.parseJSON(e)), b({
                        name: g[f].name,
                        d: e
                    }), f === g.length - 1 && a(c.target).remove()
                }).click()
            }
        },
        openRemote: function(b) {
            var c = this,
                d = b.url || b || prompt("Remote URL:", "http://");
            if (d) {
                var e = document.createElement("a");
                e.href = d;
                var f = e.pathname.split("/").pop(),
                    g = {
                        name: f,
                        d: "> Loading...",
                        readOnly: !0
                    };
                "string" != typeof b && (g = a.extend(g, b)), a(c._notestab).notestab("create", g, !0), a.ajax({
                    url: d,
                    success: function(b) {
                        g.d = b, a(c._adapter).ntadapter("data", g)
                    },
                    error: function(b, d, e) {
                        g.d = "> Load failure!!!\n" + (d || e), a(c._adapter).ntadapter("data", g)
                    }
                })
            }
        },
        close: function(b) {
            var c = this,
                d = a(c._notestab).data("notestab"),
                e = c.note(b || d.activeUid()),
                f = a(c._msgbox).data("msgbox");
            return e && !e.unsaved ? d.close(b) : f.confirm('Save file "' + e.name + '"?', function(a) {
                switch (a) {
                    case 1:
                        c.saveLocal(e), d.close(b);
                        break;
                    case -1:
                        d.close(b)
                }
            }, "Save"), !1
        },
        saveLocal: function(b, c) {
            var d = this,
                e = d._opt,
                f = "." + (e.suffix || "txt"),
                g = a(d._notestab).data("notestab"),
                h = b || d.note(g.activeUid());
            if (d.save2LocalStore(), h) {
                var i = h.d || "",
                    j = h.name;
                if (j && (j += j.lastIndexOf(".") === -1 ? f : ""), "function" == typeof e.saveData && (i = e.saveData(i)), "object" == typeof i && (i = JSON.stringify(i)), "undefined" != typeof chrome && chrome.fileSystem) h.savedId ? chrome.fileSystem.isRestorable(h.savedId, function(b) {
                    b ? chrome.fileSystem.restoreEntry(h.savedId, function(b) {
                        b && d._chromeWriteFile(b, i, function() {
                            h.unsaved = !1, a(d._notestab).notestab("markUnsaved", !0)
                        })
                    }) : d._chromeSaveAs(j, i, d._chromeSaved(h, c))
                }) : d._chromeSaveAs(j, i, d._chromeSaved(h, c));
                else {
                    if (window.saveAs) window.saveAs(new Blob([i], {
                        type: e.mime || "text/plain"
                    }), j);
                    else if (navigator.msSaveBlob) navigator.msSaveBlob(new Blob([i], {
                        type: e.mime || "text/plain"
                    }), j);
                    else {
                        var k = "data:" + (e.mime || "text/plain") + ";charset=utf-8," + encodeURIComponent(i);
                        d.saveAs(k, j)
                    }
                    a(d._notestab).notestab("markUnsaved", !0)
                }
            }
            return !1
        },
        saveAs: function(a, c, d) {
            var e = "download" in document.createElement("a");
            if (e) {
                var f = document.createElement("a");
                if (f.setAttribute("href", a), f.setAttribute("download", c), document.createEvent) {
                    var g = document.createEvent("MouseEvents");
                    g.initEvent("click", !0, !0), f.dispatchEvent(g)
                } else f.click()
            } else if (navigator.msSaveBlob) {
                var h = a.indexOf(";base64,");
                h !== -1 && (a = a.substring(h + 8)), a = b(a, d || "image/*"), navigator.msSaveBlob(a, c)
            } else console.log(window.navigator.msSaveBlob), console.log("Not support download attribute")
        },
        _chromeSaved: function(b, c) {
            var d = this;
            return function(e) {
                b.savedId = chrome.fileSystem.retainEntry(e), b.path = e.fullPath, b.name = e.name, b.unsaved = !1, a(d._notestab).notestab("markUnsaved", !0).notestab("doRename", b), "function" == typeof c && c(b, e)
            }
        },
        _chromeWriteFile: function(a, b, c) {
            var d = this,
                e = d._opt;
            a.createWriter(function(d) {
                var f = !1;
                d.onwriteend = function() {
                    return f ? void("function" == typeof c && c(a)) : (f = !0, void this.truncate(this.position))
                }, d.write(new Blob([b], {
                    type: e.mime || "text/plain"
                }))
            }, function(a) {
                console.log(a)
            })
        },
        _chromeSaveAs: function(a, b, c) {
            var d = this;
            chrome.fileSystem.chooseEntry({
                type: "saveFile",
                suggestedName: a
            }, function(a) {
                !chrome.runtime.lastError && a && d._chromeWriteFile(a, b, c)
            })
        },
        _noteLoad: function(a, b, c) {
            return function(d) {
                var e = d.target.result;
                c.trigger("load", [e, a, b])
            }
        },
        _loadLocal: function(b) {
            for (var c = this, d = a(b.target), e = d[0].files, f = 0; f < e.length; f++) {
                var g = e.item(f);
                c._readFile(g, a.proxy(c._noteLoad, c)(f, e, d))
            }
        },
        _readFile: function(a, b) {
            var c = new FileReader,
                d = this,
                e = d._opt.mime;
            c.onload = b, /\.(txt|md|js|xml|html|json)$/i.test(a.name) || /text/i.test(e) ? c.readAsText(a) : c.readAsDataURL(a)
        },
        save2LocalStore: function() {
            var a = this;
            if (a._ctxUid) {
                var b = a.note(a._ctxUid);
                b && b.d && a._store.setItem("__ctxUid", a._ctxUid)
            }
            a._store.save()
        },
        _localStorage: function() {
            return d
        },
        hotkey: function(b) {
            var c = this,
                d = a(c._notestab),
                e = !1;
            if (b.ctrlKey) switch (b.which) {
                case 84:
                    d.notestab("createUntitled"), e = !0;
                    break;
                case 79:
                    c.open(), e = !0;
                    break;
                case 83:
                    c.saveLocal(), e = !0;
                    break;
                case 87:
                    c.close(), e = !0;
                    break;
                case 116:
            }
            e && (b.preventDefault(), b.stopPropagation())
        },
        activeFile: function() {
            var b = this,
                c = a(b._notestab).data("notestab");
            return b.note(c.activeUid())
        }
    }, a.fn.notes = function(b) {
        var c = arguments;
        return this.each(function() {
            var d = a(this),
                e = d.data("notes"),
                g = "object" == typeof b ? b : {};
            e || "string" == typeof b ? "string" == typeof b && e[b].apply(e, Array.prototype.slice.call(c, 1)) : d.data("notes", new f(this, g))
        })
    }
});
(function(C, r, g) {
    function t(a, b, h) {
        a.addEventListener ? a.addEventListener(b, h, !1) : a.attachEvent("on" + b, h)
    }

    function x(a) {
        if ("keypress" == a.type) {
            var b = String.fromCharCode(a.which);
            a.shiftKey || (b = b.toLowerCase());
            return b
        }
        return l[a.which] ? l[a.which] : p[a.which] ? p[a.which] : String.fromCharCode(a.which).toLowerCase()
    }

    function D(a) {
        var b = [];
        a.shiftKey && b.push("shift");
        a.altKey && b.push("alt");
        a.ctrlKey && b.push("ctrl");
        a.metaKey && b.push("meta");
        return b
    }

    function u(a) {
        return "shift" == a || "ctrl" == a || "alt" == a ||
            "meta" == a
    }

    function y(a, b) {
        var h, c, e, g = [];
        h = a;
        "+" === h ? h = ["+"] : (h = h.replace(/\+{2}/g, "+plus"), h = h.split("+"));
        for (e = 0; e < h.length; ++e) c = h[e], z[c] && (c = z[c]), b && "keypress" != b && A[c] && (c = A[c], g.push("shift")), u(c) && g.push(c);
        h = c;
        e = b;
        if (!e) {
            if (!k) {
                k = {};
                for (var m in l) 95 < m && 112 > m || l.hasOwnProperty(m) && (k[l[m]] = m)
            }
            e = k[h] ? "keydown" : "keypress"
        }
        "keypress" == e && g.length && (e = "keydown");
        return {
            key: c,
            modifiers: g,
            action: e
        }
    }

    function B(a, b) {
        return null === a || a === r ? !1 : a === b ? !0 : B(a.parentNode, b)
    }

    function c(a) {
        function b(a) {
            a =
                a || {};
            var b = !1,
                n;
            for (n in q) a[n] ? b = !0 : q[n] = 0;
            b || (v = !1)
        }

        function h(a, b, n, f, c, h) {
            var g, e, l = [],
                m = n.type;
            if (!d._callbacks[a]) return [];
            "keyup" == m && u(a) && (b = [a]);
            for (g = 0; g < d._callbacks[a].length; ++g)
                if (e = d._callbacks[a][g], (f || !e.seq || q[e.seq] == e.level) && m == e.action) {
                    var k;
                    (k = "keypress" == m && !n.metaKey && !n.ctrlKey) || (k = e.modifiers, k = b.sort().join(",") === k.sort().join(","));
                    k && (k = f && e.seq == f && e.level == h, (!f && e.combo == c || k) && d._callbacks[a].splice(g, 1), l.push(e))
                }
            return l
        }

        function g(a, b, n, f) {
            d.stopCallback(b,
                b.target || b.srcElement, n, f) || !1 !== a(b, n) || (b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation ? b.stopPropagation() : b.cancelBubble = !0)
        }

        function e(a) {
            "number" !== typeof a.which && (a.which = a.keyCode);
            var b = x(a);
            b && ("keyup" == a.type && w === b ? w = !1 : d.handleKey(b, D(a), a))
        }

        function l(a, c, n, f) {
            function e(c) {
                return function() {
                    v = c;
                    ++q[a];
                    clearTimeout(k);
                    k = setTimeout(b, 1E3)
                }
            }

            function h(c) {
                g(n, c, a);
                "keyup" !== f && (w = x(c));
                setTimeout(b, 10)
            }
            for (var d = q[a] = 0; d < c.length; ++d) {
                var p = d + 1 === c.length ? h : e(f ||
                    y(c[d + 1]).action);
                m(c[d], p, f, a, d)
            }
        }

        function m(a, b, c, f, e) {
            d._directMap[a + ":" + c] = b;
            a = a.replace(/\s+/g, " ");
            var g = a.split(" ");
            1 < g.length ? l(a, g, b, c) : (c = y(a, c), d._callbacks[c.key] = d._callbacks[c.key] || [], h(c.key, c.modifiers, {
                type: c.action
            }, f, a, e), d._callbacks[c.key][f ? "unshift" : "push"]({
                callback: b,
                modifiers: c.modifiers,
                action: c.action,
                seq: f,
                level: e,
                combo: a
            }))
        }
        var d = this;
        a = a || r;
        if (!(d instanceof c)) return new c(a);
        d.target = a;
        d._callbacks = {};
        d._directMap = {};
        var q = {},
            k, w = !1,
            p = !1,
            v = !1;
        d._handleKey = function(a,
            c, e) {
            var f = h(a, c, e),
                d;
            c = {};
            var k = 0,
                l = !1;
            for (d = 0; d < f.length; ++d) f[d].seq && (k = Math.max(k, f[d].level));
            for (d = 0; d < f.length; ++d) f[d].seq ? f[d].level == k && (l = !0, c[f[d].seq] = 1, g(f[d].callback, e, f[d].combo, f[d].seq)) : l || g(f[d].callback, e, f[d].combo);
            f = "keypress" == e.type && p;
            e.type != v || u(a) || f || b(c);
            p = l && "keydown" == e.type
        };
        d._bindMultiple = function(a, b, c) {
            for (var d = 0; d < a.length; ++d) m(a[d], b, c)
        };
        t(a, "keypress", e);
        t(a, "keydown", e);
        t(a, "keyup", e)
    }
    var l = {
            8: "backspace",
            9: "tab",
            13: "enter",
            16: "shift",
            17: "ctrl",
            18: "alt",
            20: "capslock",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "ins",
            46: "del",
            91: "meta",
            93: "meta",
            224: "meta"
        },
        p = {
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'"
        },
        A = {
            "~": "`",
            "!": "1",
            "@": "2",
            "#": "3",
            $: "4",
            "%": "5",
            "^": "6",
            "&": "7",
            "*": "8",
            "(": "9",
            ")": "0",
            _: "-",
            "+": "=",
            ":": ";",
            '"': "'",
            "<": ",",
            ">": ".",
            "?": "/",
            "|": "\\"
        },
        z = {
            option: "alt",
            command: "meta",
            "return": "enter",
            escape: "esc",
            plus: "+",
            mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
        },
        k;
    for (g = 1; 20 > g; ++g) l[111 + g] = "f" + g;
    for (g = 0; 9 >= g; ++g) l[g + 96] = g;
    c.prototype.bind = function(a, b, c) {
        a = a instanceof Array ? a : [a];
        this._bindMultiple.call(this, a, b, c);
        return this
    };
    c.prototype.unbind = function(a, b) {
        return this.bind.call(this, a, function() {}, b)
    };
    c.prototype.trigger = function(a, b) {
        if (this._directMap[a + ":" + b]) this._directMap[a + ":" + b]({}, a);
        return this
    };
    c.prototype.reset = function() {
        this._callbacks = {};
        this._directMap = {};
        return this
    };
    c.prototype.stopCallback = function(a, b) {
        return -1 < (" " + b.className + " ").indexOf(" mousetrap ") || B(b, this.target) ? !1 : "INPUT" == b.tagName || "SELECT" == b.tagName || "TEXTAREA" == b.tagName || b.isContentEditable
    };
    c.prototype.handleKey = function() {
        return this._handleKey.apply(this, arguments)
    };
    c.init = function() {
        var a = c(r),
            b;
        for (b in a) "_" !== b.charAt(0) && (c[b] = function(b) {
            return function() {
                return a[b].apply(a, arguments)
            }
        }(b))
    };
    c.init();
    C.Mousetrap = c;
    "undefined" !== typeof module && module.exports && (module.exports =
        c);
    "function" === typeof define && define.amd && define(function() {
        return c
    })
})(window, document);
/*! js-shortid 2016-04-10 */
! function(a, b) {
    "use strict";
    if ("function" == typeof define && define.amd) define(b);
    else if ("undefined" != typeof module && module.exports) module.exports = b();
    else {
        var c = a.shortid,
            d = b();
        d.noConflict = function() {
            return a.shortid = c, d
        }, a.shortid = d
    }
}(this, function() {
    var a = 14603328e5,
        b = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        c = 62,
        d = function(a, b) {
            return (a + b).slice(-a.length)
        },
        e = function(a) {
            this._opt = a || {}
        };
    return e.prototype = {
        _toBase: function(a, c) {
            var d = this._opt,
                e = d.symbols || b,
                f = "";
            if (c > e.length || 1 >= c) return !1;
            for (; a >= 1;) f = e[a - c * Math.floor(a / c)] + f, a = Math.floor(a / c);
            return 11 > c ? parseInt(f) : f
        },
        _salts: function() {
            for (var a = this, b = a._opt, e = b.salts || 2, f = "", g = 0; e > g; g++) {
                var h = Math.floor(3844 * Math.random());
                f += d("00", a._toBase(h, c))
            }
            return f
        },
        gen: function() {
            var b = this,
                d = b._opt,
                e = d.interval || 1,
                f = d.initTime || a,
                g = e > 0 ? Math.floor(((new Date).getTime() - f) / e) : 0,
                h = b._salts();
            return 0 === g ? h : b._toBase(g, c) + h
        }
    }, {
        inst: function(a) {
            return new e(a)
        },
        gen: function(a) {
            return new e(a).gen()
        },
        uuid: function() {
            return new e({
                salts: 4
            }).gen()
        }
    }
}); /*! jh2d 2016-09-01 */
! function(a, b) {
    "use strict";
    if ("function" == typeof define && define.amd) define(b);
    else if ("undefined" != typeof module && module.exports) module.exports = b();
    else {
        var c = a.jh2d,
            d = b();
        d.noConflict = function() {
            return a.jh2d = c, d
        }, a.jh2d = d
    }
}(this, function() {
    function a(a, b, c, d, e) {
        return {
            x: a + c * Math.cos(e),
            y: b + d * Math.sin(e)
        }
    }

    function b(b, c, d, e, f, g, h, i) {
        var j = a(b, c, d, e, f),
            k = a(b, c, d, e, g),
            l = ["M", j.x, j.y, "A", d, e, 0, void 0 === i ? 1 : i, h ? 1 : 0, k.x, k.y];
        return l
    }

    function c(a, c, d, e, f, g, h, i) {
        var j = b(a, c, d, e, f, g, h, i);
        return j[0] = "L", j
    }
    var d = 180 / Math.PI,
        e = [
            [4, 4],
            [8, 4, 4, 4],
            [8, 4, 4, 4, 4, 4, 8, 4]
        ],
        f = 1,
        g = 2,
        h = 4,
        i = 8,
        j = 10,
        k = Object.prototype.toString,
        l = Object.prototype.hasOwnProperty,
        m = function(a) {
            return "[object Array]" === k.call(a)
        },
        n = function(a, b) {
            var c = -1;
            return p(a, function(a, d) {
                var e = !1;
                if (e = "function" == typeof b ? b(a, d) : a === b) return c = d, !0
            }), c
        },
        o = function(a) {
            if (null == a) return !0;
            if (a.length > 0) return !1;
            if (0 === a.length) return !0;
            for (var b in a)
                if (l.call(a, b)) return !1;
            return !0
        },
        p = function(a, b, c) {
            for (var d = c ? -1 : 1, e = d === -1 ? a.length - 1 : 0; e < a.length && e >= 0 && !b(a[e], e);) e += d;
            return a
        },
        q = function(a, b) {
            if (void 0 === b) return a;
            var c = [],
                d = !0;
            m(b) || (b = [b], d = !1);
            for (var e = 0; e < b.length; e++) {
                var f = b[e];
                c[c.length] = a[f]
            }
            return d ? c : c[0]
        },
        r = function(a, b, c) {
            return b !== c && a.splice(c, 1, a.splice(b, 1, a[c])[0]), a
        },
        s = function(a) {
            if (null != a && "object" == typeof a && !(a instanceof HTMLElement)) {
                if (m(a)) {
                    for (var b = [], c = 0; c < a.length; c++) b[b.length] = s(a[c]);
                    return b
                }
                var d = {};
                for (var e in a) "__proto__" !== e && (d[e] = s(a[e]));
                return d
            }
            return a
        },
        t = function(a, b, c, d) {
            if ("object" == typeof b)
                for (var e in b) {
                    var f = !1;
                    f = "function" == typeof d ? d(e) : m(d) && n(d, e) !== -1, f || ((void 0 === a[e] || null == a[e] || c) && (a[e] = s(b[e])), void 0 !== a[e] && null != a[e] || delete a[e])
                }
            return a
        },
        u = [{
            re: /#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
            format: "hex",
            parse: function(a) {
                return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16), 1]
            }
        }, {
            re: /#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
            format: "hex",
            parse: function(a) {
                return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16), 1]
            }
        }],
        v = function(a) {
            for (var b = 0; b < u.length; b++) {
                var c = u[b],
                    d = c.re.exec(a),
                    e = d && c.parse.apply(this, [d]);
                if (e) return e
            }
            return !1
        },
        w = function(a, b) {
            var c = b || -128,
                d = v(a);
            if (d) {
                var e = 0,
                    f = d[e++] + c,
                    g = d[e++] + c,
                    h = d[e++] + c;
                return f = Math.max(0, Math.min(255, f)), g = Math.max(0, Math.min(255, g)), h = Math.max(0, Math.min(255, h)), z([f, g, h, 1])
            }
            return a
        },
        x = function(a, b) {
            return w(a, b || 128)
        },
        y = function(a) {
            var b = v(a);
            if (b) {
                var c = 0,
                    d = 255 ^ b[c++],
                    e = 255 ^ b[c++],
                    f = 255 ^ b[c++];
                return z([d, e, f, 1])
            }
            return a
        },
        z = function(a) {
            var b = 0;
            return "#" + (1 << 24 | a[b++] << 16 | a[b++] << 8 | a[b++]).toString(16).substr(1)
        },
        A = function(a, b, c, d, e) {
            d = d || 1, e = e || [0, 0];
            for (var f = [], g = a[0], h = a[1], i = e[0], j = e[1], k = !!b && (0 !== c || 0 !== i || 0 !== j), l = 0; k && l < b.length;) {
                var m = b[l] + i,
                    n = b[l + 1] + j,
                    o = 0 !== c ? [(m - g) * Math.cos(c) - d * (n - h) * Math.sin(c) + g, d * (m - g) * Math.sin(c) + (n - h) * Math.cos(c) + h] : [m, n];
                f[f.length] = Math.round(1e4 * o[0]) / 1e4, f[f.length] = Math.round(1e4 * o[1]) / 1e4, l += 2
            }
            return 0 === f.length ? b : f
        },
        B = function(a, b, c, d) {
            var e = a.dx || 0,
                f = a.dy || 0,
                g = a.x + e,
                h = a.y + f,
                i = a.w,
                j = a.h,
                k = a.initRotate || 0,
                l = (a.rotate || 0) + k,
                m = a.rc || [g + i / 2, h + j / 2];
            return A(m, b, l, c, d ? null : [e, f])
        },
        C = function(a, b) {
            return [b[0] - a[0], b[1] - a[1]]
        },
        D = function(a, b) {
            var c = C(a, b);
            return Math.sqrt(c[0] * c[0] + c[1] * c[1])
        },
        E = function(a, b, c, d, e) {
            var j = d / c,
                k = a + c / 2,
                l = b + d / 2,
                m = e[0] - k,
                n = e[1] - l,
                o = 0;
            return n >= Math.abs(m * j) && (o = i), n <= -1 * Math.abs(m * j) && (o = g), m >= Math.abs(n / j) && (o = f), m <= -1 * Math.abs(n / j) && (o = h), o
        },
        F = function(a, b, c) {
            var d = E(a.x, a.y, a.w, a.h, b),
                e = [0, 0],
                j = [0, 0],
                k = function(a) {
                    var b = a / 6,
                        c = b + a / 4,
                        d = 5 * a / 12;
                    return [b, c, d]
                },
                l = null,
                m = d;
            switch (d === f || d === h ? (l = k(a.h), e[1] = a.y + l[0], j[1] = a.y + l[1], (a.h > 0 && b[1] > a.y + a.h / 2 || a.h < 0 && b[1] < a.y + a.h / 2) && (e[1] += l[2], j[1] += l[2]), a.w < 0 && (m = (h | f) ^ d)) : (l = k(a.w), e[0] = a.x + l[0], j[0] = a.x + l[1], (a.w > 0 && b[0] > a.x + a.w / 2 || a.w < 0 && b[0] < a.x + a.w / 2) && (e[0] += l[2], j[0] += l[2]), a.h < 0 && (m = (g | i) ^ d)), m) {
                case f:
                    e[0] = a.x + a.w, j[0] = a.x + a.w;
                    break;
                case g:
                    e[1] = a.y, j[1] = a.y;
                    break;
                case h:
                    e[0] = a.x, j[0] = a.x;
                    break;
                case i:
                    e[1] = a.y + a.h, j[1] = a.y + a.h
            }
            return c(e, j, d)
        },
        G = function(a, b) {
            var c = 2;
            a.length >= 8 && (c = 3);
            var d, e, f = 0,
                g = a[f++],
                h = a[f++],
                i = a[f++],
                j = a[f++],
                k = a[f++],
                l = a[f++];
            3 === c && (d = a[f++], e = a[f++]);
            var m = [];
            return 3 === c ? (m[m.length] = Math.pow(1 - b, 3) * g + 3 * b * Math.pow(1 - b, 2) * i + 3 * Math.pow(b, 2) * (1 - b) * k + Math.pow(b, 3) * d, m[m.length] = Math.pow(1 - b, 3) * h + 3 * b * Math.pow(1 - b, 2) * j + 3 * Math.pow(b, 2) * (1 - b) * l + Math.pow(b, 3) * e) : (m[m.length] = Math.pow(1 - b, 2) * g + 2 * b * (1 - b) * i + Math.pow(b, 2) * k, m[m.length] = Math.pow(1 - b, 2) * h + 2 * b * (1 - b) * j + Math.pow(b, 2) * l), m
        },
        H = function(a, b) {
            for (var c = .001, d = [], e = G(a, 0), f = e, g = 0, h = 0, i = [], j = c; j <= 1; j += c) {
                e = G(a, j);
                var k = D(f, e);
                k < b[g] / 10 || (h += k, f = e, h >= b[g] && (g % 2 === 0 && d.push(i), g = (g + 1) % b.length, i = [], h = 0), g % 2 === 0 && i.push(e[0], e[1]))
            }
            return i.length > 0 && d.push(i), d
        },
        I = function(a, b, c, d) {
            var e = a[0],
                f = a[1],
                g = b[0],
                h = b[1],
                i = c[0],
                j = c[1],
                k = d[0],
                l = d[1],
                m = ((g - e) * (i - k) * (j - f) - i * (g - e) * (j - l) + e * (h - f) * (i - k)) / ((h - f) * (i - k) - (g - e) * (j - l)),
                n = ((h - f) * (j - l) * (i - e) - j * (h - f) * (i - k) + f * (g - e) * (j - l)) / ((g - e) * (j - l) - (h - f) * (i - k));
            return [m, n]
        },
        J = function(a, c, d, e) {
            var f = [],
                g = c[0] - a[0],
                h = c[1] - a[1],
                i = 0,
                j = 0,
                k = -1;
            0 !== g ? 0 !== h ? (i = h / g, j = Math.atan(i)) : j = (g < 0 ? 1 : 2) * Math.PI : j = Math.PI / 2, i < 0 && (k = 1), c[1] < a[1] && (k *= -1);
            var l = c[0],
                m = c[1];
            if (5 === e) f = f.concat(b(l, m, d / 2, d / 2, 2 * Math.PI - .001, 0));
            else {
                f = f.concat(["M", l, m]);
                var n = [k * d * Math.cos(j - Math.PI / 6) + l, k * d * Math.sin(j - Math.PI / 6) + m],
                    o = [k * d * Math.cos(j + Math.PI / 6) + l, k * d * Math.sin(j + Math.PI / 6) + m],
                    p = [n[0] + (o[0] - n[0]) / 2, n[1] + (o[1] - n[1]) / 2];
                switch (f = f.concat(["L", n[0], n[1]]), e) {
                    case 2:
                        p = [l + (p[0] - l) / 2, m + (p[1] - m) / 2], f = f.concat(["L", p[0], p[1]]);
                        break;
                    case 3:
                        p = [l + (p[0] - l) / 2, m + (p[1] - m) / 2], f = f.concat(["Q", p[0], p[1], o[0], o[1]]);
                        break;
                    case 4:
                        p = [p[0] + (p[0] - l), p[1] + (p[1] - m)], f = f.concat(["L", p[0], p[1]])
                }
                3 !== e && (f = f.concat(["L", o[0], o[1]]))
            }
            return f = f.concat(["Z"])
        },
        K = function(a, b, c) {
            var d = b || 8,
                e = 2 * Math.PI / d;
            c = c || 0;
            for (var f = a.x + a.w / 2, g = a.y + a.h / 2, h = [], i = 0; i < d; i++) {
                var j = i * e + c,
                    k = a.w / 2 * Math.cos(j) + f,
                    l = a.h / 2 * Math.sin(j) + g;
                h[h.length] = [k, l]
            }
            return h
        },
        L = function(a, b, c) {
            for (var d = a.ex || {
                    dx: a.w / b,
                    dy: a.h / b
                }, e = d.dx, f = d.dy, g = b || 8, h = 2 * Math.PI / g, i = c || 0, j = a.x + a.w / 2, k = a.y + a.h / 2, l = [], m = 0; m < g; m++) {
                var n = m * h + i,
                    o = a.w / 2 * Math.cos(n) + j,
                    p = a.h / 2 * Math.sin(n) + k;
                l[l.length] = [o, p];
                var q = n + h / 2,
                    r = (a.w - 2 * e) / 2,
                    s = (a.h - 2 * f) / 2,
                    t = r * Math.cos(q) + j,
                    u = s * Math.sin(q) + k;
                l[l.length] = [t, u]
            }
            return l
        },
        M = function(a) {
            var b = a.ex,
                c = b.dx,
                d = b.dy,
                e = 0,
                f = d - a.h / 2,
                g = 1;
            if (c !== a.w / 2) {
                var h = f / (c - a.w / 2);
                h = h * a.w / a.h, h < 0 && (g = -1), e = Math.atan(h), c < a.w / 2 && (e += Math.PI)
            } else g = f < 0 ? -1 : 1, e = g * Math.PI / 2;
            var i = e - Math.PI / 12,
                j = e + Math.PI / 12;
            return [i, j]
        },
        N = function(a) {
            var b = a.ex[0].dx,
                c = a.ex[0].dy,
                d = a.ex[1].dx,
                e = a.ex[1].dy,
                f = 0,
                g = 0,
                h = 0,
                i = 0,
                j = c - a.h / 2,
                k = e - a.h / 2;
            return b !== a.w / 2 ? (f = j / (b - a.w / 2), g = Math.atan(f), b < a.w / 2 && (g += Math.PI)) : g = j < 0 ? -Math.PI / 2 : Math.PI / 2, d !== a.w / 2 ? (h = k / (d - a.w / 2), i = Math.atan(h), d < a.w / 2 && (i += Math.PI)) : i = k < 0 ? -Math.PI / 2 : Math.PI / 2, i <= g && (i += 2 * Math.PI), [g, i]
        },
        O = function(a) {
            var b = a.gd || 0,
                c = b,
                d = a.gdt,
                e = m(b);
            d ? e || (c = [50, 50, 100, 50, 50], (b & f) === f && (c[0] = 100, c[3] = 100), (b & g) === g && (c[1] = 0, c[4] = 0), (b & h) === h && (c[0] = 0, c[3] = 0), (b & i) === i && (c[1] = 100, c[4] = 100)) : e || (c = [0, 0, 0, 0], (b & f) === f && (c[0] = 100, c[2] = 0), (b & g) === g && (c[1] = 0, c[3] = 100), (b & h) === h && (c[0] = 0, c[2] = 100), (b & i) === i && (c[1] = 100, c[3] = 0));
            var j = a.gdc;
            if (!m(j)) {
                var k = a.color || "#ddd",
                    l = x(k),
                    n = w(k);
                j = ["0", l, "100", n]
            }
            return [c, j]
        },
        P = function(a, b, c) {
            var d = 0,
                e = Math.abs(b[d++]),
                f = Math.abs(b[d++]),
                g = b[d++],
                h = b[d++],
                i = b[d++],
                j = b[d++],
                k = b[d++],
                l = a[0],
                m = a[1],
                n = (l - j) / 2 * (Math.cos(g) + Math.sin(g)),
                o = (m - k) / 2 * (Math.cos(g) - Math.sin(g)),
                p = Math.pow(n, 2),
                q = Math.pow(o, 2),
                r = Math.pow(e, 2),
                s = Math.pow(f, 2),
                t = p / r + q / s;
            t > 1 && (e *= Math.sqrt(t), f *= Math.sqrt(t));
            var u = (h === i ? -1 : 1) * Math.sqrt((r * s - r * q - s * p) / (r * q + s * p)),
                v = u * (e * o / f),
                w = u * (-f * n / e),
                x = v * (Math.cos(g) - Math.sin(g)) + (l + j) / 2,
                y = w * (Math.cos(g) + Math.sin(g)) + (m + k) / 2,
                z = Q([1, 0], [(n - v) / e, (o - w) / f]),
                A = Q([(n - v) / e, (o - w) / f], [(-n - v) / e, (-o - w) / f]) % (2 * Math.PI);
            return 0 === i && A > 0 ? A -= 2 * Math.PI : 1 === i && A < 0 && (A += 2 * Math.PI), c([x, y], z, A)
        },
        Q = function(a, b) {
            var c = a[0],
                d = a[1],
                e = b[0],
                f = b[1],
                g = c * e + d * f,
                h = Math.sqrt((c * c + d * d) * (e * e + f * f)),
                i = c * f - d * e < 0 ? -1 : 1,
                j = i * Math.acos(g / h);
            return j
        },
        R = function(a) {
            var b = a.text;
            if (void 0 !== b) return m(b) ? (b = b.join("\n"), a.text = b, R(a)) : "object" == typeof b ? R(b) : b.split(/\n|<br[\/]{0,1}\>/)
        },
        S = function(a, b) {
            var c = a.text,
                d = a.fillStyle || "#fff",
                e = a.w / 2,
                j = a.h / 2;
            b = b || T();
            var k = b[1],
                l = 1,
                n = 0,
                o = R(a);
            d = y(d);
            var p = {
                dx: e,
                dy: j,
                fill: d,
                align: "center",
                baseline: "middle"
            };
            if (void 0 !== o)
                if ("object" != typeof c || m(c)) l = o.length, n = p.dy, n = j - l * k / 2 + k / 2, p.dy = n, p.text = a.text;
                else {
                    var q = c.pos;
                    l = o.length, n = p.dy, k = c.size || k, n = j - l * k / 2 + k / 2, p.dy = n, q && ((q & f) === f && (p.dx = a.w, p.align = "right"), (q & g) === g && (p.dy = 0, p.baseline = "top"), (q & h) === h && (p.dx = 0, p.align = "left"), (q & i) === i && (n = a.h - l * k + k, p.dy = n, p.baseline = "bottom"), q = (240 & q) >> 4, (q & f) === f && (p.dx += a.w), (q & g) === g && (p.dy -= a.h), (q & h) === h && (p.dx -= a.w), (q & i) === i && (p.dy += a.h)), t(p, c, !0)
                }
            return p
        },
        T = function(a) {
            var b = [16, 16];
            if ("undefined" != typeof document) {
                a = a || document.body;
                var c = document.createElement("div");
                c.style.cssText = "display:inline-block; padding:0; line-height:1; position:absolute; visibility:hidden; font-size:1em", c.appendChild(document.createTextNode("M")), a.appendChild(c), b = [c.offsetWidth, c.offsetHeight], a.removeChild(c)
            }
            return b
        },
        U = function(a, b) {
            var c = 0,
                d = [a[c++], a[c++]],
                e = [a[c++], a[c++]],
                f = [a[c++], a[c++]],
                g = (e[1] - d[1]) / (e[0] - d[0]),
                h = (e[1] - f[1]) / (e[0] - f[0]),
                i = (d[1] - f[1]) / (d[0] - f[0]),
                j = (g * (b[0] - e[0]) - (b[1] - e[1])) * (g * (f[0] - e[0]) - (f[1] - e[1])),
                k = (h * (b[0] - e[0]) - (b[1] - e[1])) * (h * (d[0] - e[0]) - (d[1] - e[1])),
                l = (i * (b[0] - d[0]) - (b[1] - d[1])) * (i * (e[0] - d[0]) - (e[1] - d[1]));
            return j >= 0 && k >= 0 && l >= 0
        },
        V = function(a, b) {
            var c = a.x + (a.dx || 0),
                d = a.y + (a.dy || 0),
                e = a.w,
                f = a.h,
                g = e / Math.abs(e),
                h = f / Math.abs(f),
                i = 3;
            c -= i * g, d -= i * h, e += 2 * i * g, f += 2 * i * h;
            var j = [c, d, c + e, d, c, d + f, c + e, d + f];
            return U(j, b) || U(j.slice(2, 8), b)
        },
        W = [1, 3, 2, 6, 4, 12, 8, 9],
        X = function(a, b) {
            for (var c = 0; c < W.length; c++) {
                var d = W[c];
                if (b(Y(a, d), d)) return d
            }
            return 0
        },
        Y = function(a, b) {
            var c = a.x + (a.dx || 0),
                d = a.y + (a.dy || 0),
                e = a.w,
                j = a.h,
                k = e / 2,
                l = j / 2,
                m = c + k,
                n = d + l;
            return (b & f) === f && (m = c + e), (b & g) === g && (n = d), (b & h) === h && (m = c), (b & i) === i && (n = d + j), [m, n]
        },
        Z = function(a) {
            var b = a.x,
                c = a.y,
                d = a.w,
                e = a.h;
            return ["M", b, c, "l", d, 0, "l", 0, e, "l", -d, 0, "z"]
        },
        $ = 3.5,
        _ = 3,
        aa = function(a, b) {
            return b % 3 === 0 ? ca(a) : ba(a)
        },
        ba = function(a) {
            var b = 2 * _;
            return Z({
                x: a[0] - _,
                y: a[1] - _,
                w: b,
                h: b
            })
        },
        ca = function(a) {
            return b(a[0], a[1], $, $, 2 * Math.PI - .001, 0).concat("Z")
        },
        da = function(a) {
            var c = [],
                d = [],
                e = [],
                f = [],
                g = $,
                h = function(a, b) {
                    d = d.concat(aa(a, b))
                };
            m(a) || (a = [a]);
            for (var i = 0; i < a.length; i++) {
                var j = a[i],
                    k = j.x + (j.dx || 0),
                    l = j.w,
                    n = k + l / 2,
                    o = j.y + (j.dy || 0),
                    p = pa(j);
                c = c.concat(Z(j)), c = c.concat(["M", n, o, "L", p[0], p[1]]), X(j, h), e = e.concat(b(p[0], p[1], g, g, 2 * Math.PI - .001, 0)), e = e.concat("Z"), f = f.concat(ka(j))
            }
            return {
                style: 2,
                d: c,
                dd: {
                    style: 3,
                    lw: .5,
                    d: d,
                    dd: {
                        fillStyle: "#0f0",
                        d: e,
                        dd: {
                            fillStyle: "#ff0",
                            d: f
                        }
                    }
                }
            }
        },
        ea = function(a, b) {
            var c = 5,
                d = a[0],
                e = a[1],
                f = b[0],
                g = b[1];
            return ra() && (c *= 2), Math.pow(g - e, 2) + Math.pow(f - d, 2) <= Math.pow(c + 2, 2)
        },
        fa = function(a, b) {
            return B(a, b, -1, !0)
        },
        ga = function(a) {
            return "line" === a.type || "linex" === a.type || "linexx" === a.type || !!a.conn
        },
        ha = function(a, b) {
            var c = a.dx || 0,
                d = a.dy || 0,
                e = fa(a, b),
                f = ga(a);
            return e = [e[0] - c, e[1] - d], X(a, function(a, b) {
                return f ? (6 === b || 9 === b) && ea(a, e) : ea(a, e)
            })
        },
        ia = function(a, b) {
            var c = a.x,
                d = a.y,
                e = a.w,
                f = a.h,
                g = a.ex || [],
                h = c + e / 2,
                i = d + f / 2,
                j = [0, 0],
                k = [e, f],
                l = 0,
                n = 0,
                o = !1;
            m(g) || (g = [g]), p(g, function(a, e) {
                var f = [g[e].dx, g[e].dy];
                return l = f[0] - j[0], n = f[1] - j[1], h = c + l / 2, i = d + n / 2, c += l, d += n, (o = b([h, i], [c, d], e)) ? o : void(j = f)
            }), o || (l = k[0] - j[0], n = k[1] - j[1], h = c + l / 2, i = d + n / 2, c += l, d += n, b([h, i], [c, d], g.length, !0))
        },
        ja = function(a) {
            var b = [];
            return b = b.concat(ca([a.x, a.y])), ia(a, function(a, c) {
                b = b.concat(ba(a)), b = b.concat(ca(c))
            }), b
        },
        ka = function(a) {
            var b = [];
            return ia(a, function(a, c, d, e) {
                e || (b = b.concat(ca(c)))
            }), b
        },
        la = function(a, b) {
            var c = a.x + (a.dx || 0),
                d = a.y + (a.dy || 0),
                e = a.ex || [],
                f = -1,
                g = fa(a, b);
            m(e) || (e = [e]);
            for (var h = 0; h < e.length; h++) {
                var i = [e[h].dx, e[h].dy];
                if (ea([c + i[0], d + i[1]], g)) {
                    f = h;
                    break
                }
            }
            return f
        },
        ma = function(a, b) {
            var c = a.dx || 0,
                d = a.dy || 0,
                e = fa(a, b),
                f = -1;
            return e = [e[0] - c, e[1] - d], ia(a, function(a, b, c) {
                if (ea(a, e)) return f = c, !0
            }), f
        },
        na = function(a, b, c) {
            var d = a.w,
                e = a.h,
                f = a.ex || [],
                g = [0, 0],
                h = [d, e];
            return m(f) || (f = [f]), b - 1 >= 0 && (g = [f[b - 1].dx, f[b - 1].dy]), b + 1 < f.length && (h = [f[b + 1].dx, f[b + 1].dy]), Aa(g, h, [c[0] - a.x, c[1] - a.y])
        },
        oa = function(a, b, c) {
            var d = a.ex || [];
            m(d) || (d = [d]), p(d, "function" == typeof b ? b : function(a) {
                c ? (a.dx *= b[0], a.dy *= b[1]) : (a.dx += b[0], a.dy += b[1])
            })
        },
        pa = function(a) {
            var b = a.x,
                c = a.w,
                d = b + c / 2,
                e = a.y,
                f = a.h,
                g = f / Math.abs(f),
                h = e - 20 * g;
            return [d, h]
        },
        qa = function(a, b) {
            var c = a.dx || 0,
                d = a.dy || 0,
                e = fa(a, b);
            return e = [e[0] - c, e[1] - d], ea(pa(a), e)
        },
        ra = function() {
            return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
        },
        sa = ["e-resize", "ne-resize", "n-resize", "nw-resize", "w-resize", "sw-resize", "s-resize", "se-resize"],
        ta = function(a, b) {
            a = n(W, a), b = b || 0;
            var c = 2 * Math.PI;
            return b %= c, b < 0 && (b += c), a -= Math.floor(4 * b / Math.PI) - 8, sa[a % 8]
        },
        ua = function(a, b) {
            for (var c = [0, 0], d = null, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = "mlqcsaz", q = d || [0, 0], r = 0; r < a.length;) {
                var s = a[r++],
                    t = q[0],
                    u = q[1],
                    v = 0,
                    w = 0,
                    x = !1;
                switch (p.indexOf(s) !== -1 && (v = q[0], w = q[1], s = s.toUpperCase()), s) {
                    case "M":
                        t = a[r++] + v, u = a[r++] + w, c = [t, u], x = b(s, c);
                        break;
                    case "L":
                        e = t, f = u, t = a[r++] + v, u = a[r++] + w, x = b(s, d, [t, u]);
                        break;
                    case "Q":
                        e = t, f = u, g = a[r++] + v, h = a[r++] + w, t = a[r++] + v, u = a[r++] + w, x = b(s, d, [g, h, t, u]);
                        break;
                    case "C":
                        e = t, f = u, g = a[r++] + v, h = a[r++] + w, i = a[r++] + v, j = a[r++] + w, t = a[r++] + v, u = a[r++] + w, x = b(s, d, [g, h, i, j, t, u]);
                        break;
                    case "S":
                        e = t, f = u, g = 2 * t - i, h = 2 * u - j, i = a[r++] + v, j = a[r++] + w, t = a[r++] + v, u = a[r++] + w, x = b(s, d, [g, h, i, j, t, u]);
                        break;
                    case "A":
                        k = a[r++], l = a[r++], m = a[r++], n = a[r++], o = a[r++], t = a[r++] + v, u = a[r++] + w, x = b(s, d, [k, l, m, n, o, t, u]);
                        break;
                    case "Z":
                        x = b(s, d, c);
                        break;
                    default:
                        console.log("cannot parse:" + a[r - 1])
                }
                if (d || (d = q), d[0] = t, d[1] = u, x) break
            }
        },
        va = function(a, b) {
            var c = 0,
                d = 0,
                e = [],
                f = [];
            ua(a, function(a) {
                switch (a) {
                    case "M":
                        d !== c && (f[f.length] = [d, c], d = c), c += 3;
                        break;
                    case "L":
                        c += 3;
                        break;
                    case "Q":
                        c += 5;
                        break;
                    case "C":
                        c += 7;
                        break;
                    case "S":
                        c += 5;
                        break;
                    case "A":
                        c += 8;
                        break;
                    case "Z":
                        c += 1, e[e.length] = [d, c], d = c
                }
            }), d !== c && (f[f.length] = [d, c]), b(e, f)
        },
        wa = function(a, b) {
            var c = 0;
            return va(a, function(d, e) {
                for (var f = null, g = !1, h = 0; h < d.length; h++)
                    if (f = d[h], ya(a.slice(f[0], f[1]), b) && (g = !g), za(a.slice(f[0], f[1]), b)) {
                        c = 1;
                        break
                    }
                if (g && (c = 1), 0 === c)
                    for (var i = 0; i < e.length; i++)
                        if (f = e[i], za(a.slice(f[0], f[1]), b)) {
                            c = 2;
                            break
                        }
            }), c
        },
        xa = function(a, b, c) {
            return b[1] > c[1] != a[1] > c[1] && c[0] < (a[0] - b[0]) * (c[1] - b[1]) / (a[1] - b[1]) + b[0]
        },
        ya = function(a, b) {
            var c = !1;
            return ua(a, function(a, d, e) {
                switch (a) {
                    case "Z":
                    case "L":
                        xa(d, e, b) && (c = !c);
                        break;
                    case "Q":
                    case "C":
                        for (var f = 1 / Math.sqrt(Math.pow(e[e.length - 1] - d[1], 2) + Math.pow(e[e.length - 2] - d[0], 2)), g = d, h = d.concat(e), i = f; i <= 1; i += f) {
                            var j = G(h, i);
                            xa(g, j, b) && (c = !c), g = j
                        }
                        break;
                    case "A":
                        P(d, e, function(a, f, g) {
                            if (a[1] + e[1] > b[1] != a[1] - e[1] > b[1])
                                for (var h = g < 0 ? -1 : 1, i = f + g, j = f, k = d; 1 === h ? j < i : j > i;) {
                                    j += .0872 * h;
                                    var l = [a[0] + e[0] * Math.cos(j), a[1] + e[1] * Math.sin(j)];
                                    xa(k, l, b) && (c = !c), k = l
                                }
                        })
                }
            }), c
        },
        za = function(a, b) {
            var c = !1;
            return ua(a, function(a, d, e) {
                switch (a) {
                    case "Z":
                    case "L":
                        if (d && (c = Aa(d, e, b)), c) return c;
                        break;
                    case "Q":
                    case "C":
                        for (var f = 1 / Math.sqrt(Math.pow(e[e.length - 1] - d[1], 2) + Math.pow(e[e.length - 2] - d[0], 2)), g = d.concat(e), h = f; h <= 1; h += f) {
                            var i = G(g, h);
                            if (c = ea(i, b)) return c
                        }
                        break;
                    case "A":
                        P(d, e, function(a, d, f) {
                            var g = Math.atan2(b[1] - a[1], b[0] - a[0]),
                                h = f < 0 ? -1 : 1,
                                i = d + f;
                            if (g = parseInt(100 * g) / 100, d = parseInt(100 * d) / 100, i = parseInt(100 * i) / 100, h === -1 ? (g !== d && g >= 0 && f < -Math.PI && (g -= parseInt(2 * Math.PI * 100) / 100), c = g <= d && g >= i) : (g !== d && g <= 0 && f > Math.PI && (g += parseInt(2 * Math.PI * 100) / 100), c = g >= d && g <= i), c) {
                                var j = [a[0] + e[0] * Math.cos(g), a[1] + e[1] * Math.sin(g)];
                                return c = ea(j, b)
                            }
                        })
                }
            }), c
        },
        Aa = function(a, b, c) {
            var d = D(a, b),
                e = D(c, b),
                f = D(c, a),
                g = e + f <= d + 1;
            return g
        },
        Ba = function(a, b) {
            var c = a[0],
                d = a[1],
                e = b[0],
                f = b[1],
                g = Math.min(c, e),
                h = Math.max(c, e),
                i = Math.min(d, f),
                j = Math.max(d, f);
            return [g, i, h, j]
        },
        Ca = function(a, b) {
            var c = Ba([b.x, b.y], [b.x + b.w, b.y + b.h]),
                d = 0;
            return c[d] >= a[d++] && c[d] >= a[d++] && c[d] <= a[d++] && c[d] <= a[d++]
        },
        Da = function(a) {
            var b = null,
                c = 0;
            if (m(a)) {
                b = Da(a[0]);
                for (var d = 1; d < a.length; d++) {
                    var e = Da(a[d]);
                    c = 0, b[c] = Math.min(b[c], e[c++]), b[c] = Math.min(b[c], e[c++]), b[c] = Math.max(b[c], e[c++]), b[c] = Math.max(b[c], e[c++])
                }
            } else if (b = Ba([a.x, a.y], [a.x + a.w, a.y + a.h]), a.ex) {
                var f = function(d) {
                    var e = [a.x + d.dx, a.y + d.dy];
                    c = 0, b[c] = Math.min(b[c++], e[0]), b[c] = Math.min(b[c++], e[1]), b[c] = Math.max(b[c++], e[0]), b[c] = Math.max(b[c++], e[1])
                };
                m(a.ex) ? p(a.ex, f) : f(a.ex)
            }
            return b
        },
        Ea = function(a) {
            var b = Da(a),
                c = a.x,
                d = a.y;
            a.w = b[2] - b[0], a.h = b[3] - b[1], a.x = b[0], a.y = b[1], oa(a, [c - a.x, d - a.y])
        },
        Fa = function(a, b) {
            var c = [],
                d = ga(a);
            return X(a, function(a, e) {
                (!d || 6 === e && 1 === (1 & b) || 9 === e && 2 === (2 & b)) && (c = c.concat(d ? ca(a) : ba(a)))
            }), c
        },
        Ga = function(a, b) {
            var c = null,
                d = !1,
                e = ga(a);
            return b = B(a, b, -1, !0), X(a, function(a, f) {
                if (e && 6 !== f && 9 !== f || (d = ea(a, b)), d) return c = a, d
            }), d && (c = B(a, c, 1, !0)), c
        },
        Ha = function(a, b, c) {
            m(c) ? (m(c[0]) ? (a._buildPath(b, c[0]), 1 !== (1 & b.style) && null != b.style || a._buildPath(t({
                opacity: .2,
                fillStyle: "#000",
                style: 1
            }, b), c[1])) : a._buildPath(b, c), b.dd && Ha(a, t(b.dd, b, !1, ["dd"]), b.dd.d)) : "object" == typeof c && Ha(a, t(c, b), c.d)
        },
        Ia = function(a, b, c, d, e) {
            var f = b.d;
            (e || !f && "function" == typeof c[b.type]) && (f = c[b.type].apply(a, Array.prototype.slice.call(arguments, 1))), b.header && a._buildHeader(b), f && (Ha(a, b, f), b.d = f), o(b.text) || a._buildText(b, d)
        },
        Ja = function(a, b, c, d) {
            var e = T();
            if (m(b))
                for (var f = 0; f < b.length; f++) {
                    var g = b[f];
                    g.hide || Ia(a, g, c, e, d)
                } else b.hide || Ia(a, b, c, e, d)
        },
        Ka = function(a) {
            for (var b = a.w, c = a.h, d = a.scale || 1, e = j * d, f = b / e, g = 0, h = [], i = 0; g <= f; g++) h[i++] = "M", h[i++] = g * e, h[i++] = 0, h[i++] = "L", h[i++] = g * e, h[i++] = c;
            for (f = c / e, g = 0; g <= f; g++) h[i++] = "M", h[i++] = 0, h[i++] = g * e, h[i++] = "L", h[i++] = b, h[i++] = g * e;
            var k = [];
            return 1 === (1 & a.style) && (k = k.concat(["M", a.x, a.y, "l", a.w, 0, "l", 0, a.h, "l", -a.w, 0, "z"])), 2 === (2 & a.style) && (k = k.concat(h)), k
        },
        La = {};
    return {
        types: function() {
            for (var a = Array.prototype.slice.call(arguments, 0), b = 0; b < a.length; b++) {
                var c = a[b];
                t(La, c)
            }
            return La
        },
        util: {
            RAD2ANGLE: d,
            DASHEDS: e,
            EAST: f,
            NORTH: g,
            WEST: h,
            SOUTH: i,
            isArray: m,
            inArray: n,
            getArray: q,
            isEmpty: o,
            each: p,
            arrExch: r,
            clone: s,
            extend: t,
            darkColor: w,
            lightColor: x,
            reverseColor: y,
            rotate: A,
            spRotate: B,
            distance: D,
            position: E,
            doRectEx: F,
            bezier: G,
            calculateDashedBezier: H,
            crossPoint: I,
            polarToCartesian: a,
            describeArc: b,
            describeArcL: c,
            arrowHeaderPath: J,
            polygon: K,
            star: L,
            calcOvalcallout: M,
            calcExArc: N,
            gradient: O,
            arc: P,
            defaultTextOpt: S,
            inRect: V,
            doEdgePoint: X,
            edgePointPath: da,
            linePointPath: ja,
            edgePointType: ha,
            resizeCursor: ta,
            isRotatePoint: qa,
            isNearbyPoint: ea,
            parseSVG: ua,
            evalSVGPath: wa,
            indexOfEx: la,
            indexOfExHalf: ma,
            isOverExLine: na,
            updateEx: oa,
            maxRect: Ba,
            biggestRect: Da,
            insideRect: Ca,
            adjSprite: Ea,
            connPointsPath: Fa,
            evalConnPoint: Ga,
            parseClosePath: va,
            isConnector: ga,
            renderer: Ja,
            bgGridPath: Ka,
            isOverPath: za,
            doSplitText: R
        }
    }
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jh2d"], b) : "undefined" != typeof module && module.exports ? module.exports = b(require("jh2d")) : a.jh2d.canvas = b(a.jh2d)
}(this, function(a) {
    var b = a.util,
        c = b.DASHEDS,
        d = function(a, c, d, f, g) {
            b.parseSVG(d, e(a, c, f, g))
        },
        e = function(a, c, d, e) {
            var f = d[0],
                h = d[1],
                j = [0, 0];
            return function(k, m, n) {
                "A" !== k && (m = b.spRotate(c, m), n = b.spRotate(c, n));
                var o = m[0],
                    p = m[1],
                    q = 0;
                switch (k) {
                    case "M":
                        a.moveTo(o - f, p - h);
                        break;
                    case "L":
                        j = g(a, [o - f, p - h], [n[q++] - f, n[q++] - h], e, j);
                        break;
                    case "Q":
                        i(a, [o - f, p - h, n[q++] - f, n[q++] - h, n[q++] - f, n[q++] - h], e);
                        break;
                    case "C":
                        i(a, [o - f, p - h, n[q++] - f, n[q++] - h, n[q++] - f, n[q++] - h, n[q++] - f, n[q++] - h], e);
                        break;
                    case "S":
                        i(a, [o - f, p - h, n[q++] - f, n[q++] - h, n[q++] - f, n[q++] - h], e);
                        break;
                    case "A":
                        l(a, c, m, n, d, e);
                        break;
                    case "Z":
                        e && (j = g(a, [o - f, p - h], [n[q++] - f, n[q++] - h], e, j)), a.closePath();
                        break;
                    default:
                        console.log("cannot parse:" + k)
                }
            }
        },
        f = function(a, e, f) {
            var g = a.getContext();
            g.save(), e.opacity && (g.globalAlpha = e.opacity), e.alpha && (g.globalAlpha = 1 - e.alpha);
            var h = e.grc,
                i = void 0 === e.style ? 3 : e.style,
                j = e.shadow,
                k = 0,
                l = 0,
                n = 0,
                o = e.dashed;
            if ("transparent" === e.fillStyle && (i &= -2), "transparent" === e.strokeStyle && (i &= -3), b.isConnector(e) && (i = 2), e.style && (i = e.style), h && (l = h[0], n = h[1], g.translate(l, n), g.rotate(h[2])), void 0 === o || b.isArray(o) || (o = c[o]), g.beginPath(), 1 !== (1 & i) && o || d(g, e, f, [l, n]), j) {
                g.save();
                var p = e.shadowColor || "#aaa";
                g.shadowColor = p, g.shadowOffsetX = j[k++], g.shadowOffsetY = j[k++], g.shadowBlur = j[k++], 2 === (2 & i) && g.stroke(), 1 === (1 & i) && (g.fillStyle = p, g.fill()), g.restore()
            }
            if (1 === (1 & i)) {
                var q = e.fillStyle || "#fff";
                if ("object" == typeof q) {
                    if (void 0 !== q.gd) g.fillStyle = m(g, e, [l, n]), g.fill();
                    else if (q.p) {
                        var r = a._buildPattern(q, e);
                        if (r) {
                            g.fillStyle = "#fff", g.fill();
                            var s = g.createPattern(r, q.mode || "repeat");
                            s && (g.save(), g.rotate(e.rotate || 0), g.fillStyle = s, g.fill(), g.restore())
                        }
                    } else if (q.url) {
                        var t = a._buildPattern(q, e);
                        if (t) {
                            g.save();
                            var u = e.x + e.w / 2,
                                v = e.y + e.h / 2;
                            g.translate(u, v), g.rotate(e.rotate || 0), g.drawImage(t, 0, 0, t.naturalWidth, t.naturalHeight, e.x - u, e.y - v, e.w, e.h), g.restore()
                        }
                    }
                } else g.fillStyle = q, g.fill()
            }
            2 === (2 & i) && (o && (g.beginPath(), d(g, e, f, [l, n], o)), (void 0 === e.lw || e.lw > 0) && (g.lineWidth = void 0 === e.lw ? 1 : e.lw, g.strokeStyle = e.strokeStyle || "#000", g.stroke())), g.restore()
        },
        g = function(a, b, c, d, e) {
            var f = 0,
                g = e || [0, 0],
                h = g[0],
                i = g[1];
            if (d) {
                var j = [c[0] - b[0], c[1] - b[1]];
                for (f = Math.sqrt(j[0] * j[0] + j[1] * j[1]);;) {
                    var k = d[h % d.length];
                    if (i + k >= f || isNaN(f)) break;
                    i += k;
                    var l = j[0] / f * i,
                        m = j[1] / f * i;
                    h % 2 === 0 ? a.lineTo(b[0] + l, b[1] + m) : a.moveTo(b[0] + l, b[1] + m), h++
                }
                h % 2 === 0 ? a.lineTo(c[0], c[1]) : a.moveTo(c[0], c[1])
            } else a.lineTo(c[0], c[1]);
            return [h, i - f]
        },
        h = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.length > 0 && a.moveTo(d[0], d[1]);
                for (var e = 1; e < d.length / 2; e++) a.lineTo(d[2 * e], d[2 * e + 1])
            }
        },
        i = function(a, c, d) {
            if (d) {
                var e = b.calculateDashedBezier(c, d);
                h(a, e)
            } else {
                var f = 2;
                6 === c.length && a.quadraticCurveTo(c[f++], c[f++], c[f++], c[f++]), c.length >= 8 && a.bezierCurveTo(c[f++], c[f++], c[f++], c[f++], c[f++], c[f++])
            }
        },
        j = function(a, c, d, e, g, h) {
            return f(a, b.extend({
                style: 3,
                fillStyle: c.strokeStyle || "#000",
                strokeStyle: c.strokeStyle || "#000"
            }, c, !1, ["type", "dashed"]), b.arrowHeaderPath(d, e, g, h))
        },
        k = function(a, c) {
            var d = c.x,
                e = c.y,
                f = c.w,
                g = c.h,
                h = c.hz || 12,
                i = [d, e],
                k = [d + f, e + g],
                l = null,
                m = 0,
                n = 0;
            null == c.header || isNaN(c.header) || (m = 15 & c.header, n = (240 & c.header) >> 4);
            var o = i;
            if (b.isArray(c.ex) && c.ex.length > 0) {
                if (c.ex.length > 0) {
                    var p = 0;
                    m && (p = c.ex.length - 1, l = c.ex[p], o = [l.dx + c.x, l.dy + c.y], j(a, c, o, k, h, m)), n && (p = 0, l = c.ex[p], o = [l.dx + c.x, l.dy + c.y], j(a, c, o, i, h, n))
                }
            } else c.ex && !b.isArray(c.ex) ? (o = [c.ex.dx + c.x, c.ex.dy + c.y], m && j(a, c, o, k, h, m), n && j(a, c, o, i, h, n)) : (m && j(a, c, i, k, h, m), n && j(a, c, k, i, h, n))
        },
        l = function(a, c, d, e, f, g) {
            b.arc(d, e, function(h, i, j) {
                for (var k = j < 0 ? -1 : 1, l = i + j, m = i, n = d, o = 0, p = 0, q = function(d, e) {
                        if (d = b.spRotate(c, d), g) {
                            o += b.distance(d, n);
                            var f = g[p % g.length];
                            o > f ? (o = 0, p++) : p % 2 === 0 ? a.lineTo(d[0] - e[0], d[1] - e[1]) : a.moveTo(d[0] - e[0], d[1] - e[1])
                        } else a.lineTo(d[0] - e[0], d[1] - e[1]);
                        return d
                    }; 1 === k ? m < l : m > l;) m += .005 * k, n = q([h[0] + e[0] * Math.cos(m), h[1] + e[1] * Math.sin(m)], f);
                q(e.slice(e.length - 2), f)
            })
        },
        m = function(a, c) {
            var d = c.fillStyle,
                e = d.gdt || 0,
                f = b.gradient(d),
                g = f[0],
                h = f[1],
                i = c.dx || 0,
                j = c.dy || 0,
                k = c.x + i,
                l = c.y + j,
                m = c.w,
                n = c.h,
                o = null,
                p = null;
            if (0 === e) p = [k + m * g[0] / 100, l + n * g[1] / 100, k + m * g[2] / 100, l + n * g[3] / 100], c.rotate && (p = b.spRotate(c, p)), o = a.createLinearGradient.apply(a, p);
            else {
                var q = k + m * g[0] / 100,
                    r = l + n * g[1] / 100,
                    s = Math.max(Math.abs(m), Math.abs(n)) * g[2] / 100,
                    t = k + m * g[3] / 100,
                    u = l + n * g[4] / 100;
                o = a.createRadialGradient(t, u, 0, q, r, s)
            }
            for (var v = 0; v < h.length;) o.addColorStop(h[v] / 100, h[v + 1]), v += 2;
            return o
        },
        n = function(a, c, d) {
            a.save();
            var e = c.x + (c.dx || 0),
                f = c.y + (c.dy || 0),
                g = c.w,
                h = c.h,
                i = c.initRotate || 0,
                j = c.rotate || i,
                k = b.defaultTextOpt(c, d),
                l = k.text,
                m = k.dx,
                n = k.dy,
                o = c.rc || [e + g / 2, f + h / 2],
                p = 0,
                q = 0,
                r = k.size || d[1];
            if (void 0 !== l && null != l) {
                l = b.doSplitText(c), 0 !== j && (p = o[0], q = o[1], a.translate(p, q), a.rotate(j)), a.textAlign = k.align || "center", a.textBaseline = k.baseline || "middle", a.fillStyle = k.fill, a.font = (k.style || "normal") + " " + r + "pt " + (k.font || "serif");
                for (var s = 0; s < l.length; s++) {
                    var t = l[s];
                    a.fillText(t, e + m - p, f + n - q + s * r)
                }
            }
            a.restore()
        },
        o = function(a) {
            this._opt = a, this._ctx = a.canvas.getContext("2d")
        };
    o.prototype = {
        renderer: function(a, c) {
            var d = this,
                e = d._opt;
            b.renderer(d, a, c || e.types)
        },
        _buildText: function(a, b) {
            n(this.getContext(), a, b)
        },
        _buildHeader: function(a) {
            k(this, a)
        },
        _buildPath: function(a, b) {
            f(this, a, b)
        },
        getContext: function() {
            return this._ctx
        },
        save: function() {
            this.getContext().save()
        },
        restore: function() {
            this.getContext().restore()
        },
        clear: function() {
            var a = this,
                b = a._opt,
                c = b.canvas,
                d = a.getContext();
            d.clearRect(0, 0, c.width, c.height)
        },
        scale: function(a, b) {
            this.getContext().scale(a, b)
        },
        _buildPattern: function(a) {
            var c = this,
                d = c._opt,
                e = a.p || "",
                f = null,
                g = null,
                h = p[e] || {};
            if (0 === e.indexOf("p_")) {
                f = d.pcanvas, f.width = h.sw || 8, f.height = h.sh || 8;
                var i = new o({
                        canvas: f
                    }),
                    j = [];
                if (i.clear(), i.save(), a.bg && (j[j.length] = {
                        type: "rect",
                        x: 0,
                        y: 0,
                        w: f.width,
                        h: f.height,
                        style: 1,
                        fillStyle: a.bg
                    }), b.isArray(h))
                    for (var k = 0; k < h.length; k++) j[j.length] = b.extend({
                        x: 0,
                        y: 0,
                        w: 8,
                        h: 8,
                        fillStyle: a.fg || "#fff",
                        strokeStyle: a.fg || "#000"
                    }, h[k], !0);
                else j[j.length] = b.extend({
                    x: 0,
                    y: 0,
                    w: 8,
                    h: 8,
                    fillStyle: a.fg || "#fff",
                    strokeStyle: a.fg || "#000"
                }, h, !0);
                i.renderer(j, d.types), i.restore()
            } else if (0 === e.indexOf("t_") && d.pimage) {
                f = d.pcanvas, f.width = h.w || 50, f.height = h.h || 50, g = f.getContext("2d");
                var l = h.x || 0,
                    m = h.y || 0,
                    n = h.w || 50,
                    r = h.h || 50;
                g.drawImage(d.pimage, l, m, n, r, 0, 0, n, r)
            } else if (a.url) {
                var s = q[a.url];
                if (s) {
                    if ("undefined" != typeof s.naturalWidth && 0 !== s.naturalWidth) return s
                } else s = new Image, s.onload = function() {
                    "function" == typeof d.onResourceLoad && d.onResourceLoad(s)
                }, q[a.url] = s, s.src = a.url
            }
            return f
        }
    };
    var p = {
            p_x1: {
                type: "x",
                w: 1,
                h: 1,
                sw: 10,
                sh: 10,
                style: 2
            },
            p_x2: {
                type: "x",
                w: 1,
                h: 1,
                sw: 9,
                sh: 9,
                style: 2
            },
            p_x3: {
                type: "x",
                w: 1,
                h: 1,
                sw: 8,
                sh: 8,
                style: 2
            },
            p_x4: {
                type: "x",
                w: 1,
                h: 1,
                sw: 7,
                sh: 7,
                style: 2
            },
            p_x5: {
                type: "x",
                w: 1,
                h: 1,
                sw: 6,
                sh: 6,
                style: 2
            },
            p_x6: {
                type: "x",
                w: 1,
                h: 1,
                sw: 5,
                sh: 5,
                style: 2
            },
            p_x7: {
                type: "x",
                w: 1,
                h: 1,
                sw: 4,
                sh: 4,
                style: 2
            },
            p_x8: {
                type: "x",
                w: 1,
                h: 1,
                sw: 3,
                sh: 3,
                style: 2
            },
            p_x9: {
                type: "x",
                w: 1,
                h: 1,
                sw: 2,
                sh: 2,
                style: 2
            },
            p_l1: {
                type: "line"
            },
            p_l2: {
                type: "line",
                dx: 8,
                w: -8
            },
            p_l3: {
                type: "line",
                sw: 4,
                sh: 4
            },
            p_l4: {
                type: "line",
                sw: 4,
                sh: 4,
                dx: 4,
                w: -4,
                h: 4
            },
            p_l5: {
                type: "line",
                lw: 2
            },
            p_l6: {
                type: "line",
                lw: 2,
                dx: 8,
                w: -8
            },
            p_l7: {
                type: "line",
                w: 0
            },
            p_l8: {
                type: "line",
                h: 0
            },
            p_l9: {
                type: "line",
                dx: 2,
                w: 0,
                lw: 2
            },
            p_20: {
                type: "line",
                dy: 2,
                h: 0,
                lw: 2
            },
            p_21: {
                type: "line",
                w: 0,
                sw: 4,
                sh: 4
            },
            p_22: {
                type: "line",
                h: 0,
                sw: 4,
                sh: 4
            },
            p_29: [{
                type: "line",
                w: 0
            }, {
                type: "line",
                h: 0
            }],
            p_30: [{
                type: "line"
            }, {
                type: "line",
                dx: 8,
                w: -8
            }],
            p_31: [{
                type: "line",
                dy: 1,
                h: 0
            }, {
                type: "line",
                dx: 7,
                h: 4,
                w: 0
            }, {
                type: "line",
                dy: 5,
                h: 0,
                w: 8,
                lw: 1
            }, {
                type: "line",
                dy: 4,
                dx: 3,
                h: 4,
                w: 0,
                lw: 1
            }],
            t_t0: {
                x: 0
            },
            t_t1: {
                x: 52
            },
            t_t2: {
                x: 102
            },
            t_t3: {
                x: 155
            },
            t_t4: {
                x: 205
            },
            t_t5: {
                x: 0,
                y: 52
            },
            t_t6: {
                x: 52,
                y: 52
            },
            t_t7: {
                x: 102,
                y: 52
            },
            t_t8: {
                x: 155,
                y: 52
            },
            t_t9: {
                x: 205,
                y: 52
            },
            t_t10: {
                x: 0,
                y: 103
            },
            t_t11: {
                x: 52,
                y: 103
            },
            t_t12: {
                x: 103,
                y: 103
            },
            t_t13: {
                x: 155,
                y: 103
            },
            t_t14: {
                x: 206,
                y: 103
            },
            t_t15: {
                x: 0,
                y: 155
            },
            t_t16: {
                x: 52,
                y: 155
            },
            t_t17: {
                x: 102,
                y: 155
            },
            t_t18: {
                x: 155,
                y: 155
            },
            t_t19: {
                x: 205,
                y: 155
            },
            t_t20: {
                x: 0,
                y: 205
            },
            t_t21: {
                x: 52,
                y: 205
            },
            t_t22: {
                x: 102,
                y: 206
            },
            t_t23: {
                x: 155,
                y: 205
            },
            t_t24: {
                x: 205,
                y: 205
            }
        },
        q = {};
    return {
        create: function(a) {
            return new o(a)
        }
    }
}),
function(a, b) {
    "use strict";
    if ("function" == typeof define && define.amd) define(["jh2d"], b);
    else if ("undefined" != typeof module && module.exports) module.exports = b(require("jh2d"));
    else {
        var c = a.jh2d;
        c.svg = b(c)
    }
}(this, function(a) {
    var b = a.util,
        c = b.RAD2ANGLE,
        d = b.DASHEDS,
        e = b.gradient,
        f = function(a) {
            var b = null;
            if ("object" == typeof a) {
                if (a.gd || a.gdt) {
                    var c = e(a);
                    b = "url(#" + m(c[0], c[1]) + ")"
                }
            } else b = a;
            return b || "#fff"
        },
        g = function(a) {
            var b = null,
                g = null,
                h = "",
                i = a.style,
                k = a.fillStyle;
            if ("line" === a.type && (i = i || 2), i ? (b = 1 === (1 & i) ? f(k) : "none", g = 2 === (2 & i) ? f(a.strokeStyle || "#000") : null) : (g = f("#000"), b = f(k)), "object" == typeof k)
                if (k.gd || k.gdt) {
                    var l = e(k);
                    b = "url(#" + m(l[0], l[1]) + ")"
                } else b = 1 === (1 & i) ? "#fff" : "none";
            h += "fill:" + b + ";", g && (h += "stroke:" + g + ";stroke-width:" + (a.strokeSize || 1) + ";"), a.opacity && (h += "opacity:" + a.opacity + ";");
            var n = a.x + a.w / 2,
                o = a.y + a.h / 2,
                p = "";
            if (a.rotate || a.initRotate) {
                var q = a.rotate || 0;
                q += a.initRotate || 0;
                var r = q * c;
                p = 'transform="rotate(' + r + " " + n + ", " + o + ')"'
            }
            var s = "",
                t = "";
            return a.shadow && (s += ' filter="url(#' + j(a.shadow) + ')"'), void 0 !== a.dashed && (t += ' stroke-dasharray="' + d[a.dashed].join(",") + '"'), 'style="' + h + '" ' + p + s + t
        },
        h = function(a, b) {
            for (var c, d = "<defs>", f = 0; f < a.length; f++) {
                var g = a[f],
                    h = g.fillStyle;
                if (g.shadow) {
                    var l = g.shadow;
                    c = j(l), b[c] || (d += i(l, c), b[c] = !0)
                }
                if ("object" == typeof h && (h.gd || h.gdt)) {
                    var n = e(h);
                    c = m(n[0], n[1]), b[c] || (d += k(h.gdt, n, c), b[c] = !0)
                }
            }
            return d += "</defs>"
        },
        i = function(a, b) {
            var c = 0,
                d = a[c++],
                e = a[c++],
                f = a[c++];
            return '<filter id="' + b + '"><feGaussianBlur in="SourceAlpha" stdDeviation="' + d + '" /><feOffset dx="' + e + '" dy="' + f + '" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>'
        },
        j = function(a) {
            return "sd" + a.join("_")
        },
        k = function(a, b, c) {
            return a ? o(b[0], b[1], c) : n(b[0], b[1], c)
        },
        l = function(a) {
            for (var b = "", c = 0; c < a.length;) {
                var d = a[c],
                    e = a[c + 1];
                c += 2, b += '<stop offset="' + d + '%" stop-color="' + e + '" />'
            }
            return b
        },
        m = function(a, b) {
            return ("gd" + a.join("_") + b.join("_")).replace(/\#/gi, "")
        },
        n = function(a, b, c) {
            c = c || m(a, b);
            var d = 0,
                e = '<linearGradient id="' + c + '" x1="' + a[d++] + '%" y1="' + a[d++] + '%" x2="' + a[d++] + '%" y2="' + a[d++] + '%">' + l(b) + "</linearGradient>";
            return e
        },
        o = function(a, b, c) {
            c = c || m(a, b);
            var d = 0,
                e = '<radialGradient id="' + c + '" gradientUnits="objectBoundingBox" cx="' + a[d++] + '%" cy="' + a[d++] + '%" r="' + a[d++] + '%"' + (a.length > 3 ? ' fx="' + a[d++] + '%" fy="' + a[d++] + '%"' : "") + ">" + l(b) + "</radialGradient>";
            return e
        },
        p = function(a, c, d) {
            a[a.length] = q(c, b.defaultTextOpt(c), d)
        },
        q = function(a, b, c) {
            var d = '<text text-anchor="',
                e = a.x + b.dx,
                f = a.y + b.dy;
            switch (b.align) {
                case "left":
                    d += "start";
                    break;
                case "right":
                    d += "end";
                    break;
                default:
                    d += "middle"
            }
            switch (d += '" dominant-baseline="', b.baseline) {
                case "top":
                    d += "hanging";
                    break;
                case "bottom":
                    d += "text-after-edge";
                    break;
                default:
                    d += "middle"
            }
            d += '" x="' + e + '" y="' + f;
            var g = r(a, b, c);
            return d += '">' + g + "</text>"
        },
        r = function(a, b, c) {
            for (var d = "", e = b.text, f = a.x + b.dx, g = a.y + b.dy, h = 0; e && h < e.length; h++) {
                var i = e[h];
                d += '<tspan x="' + f + '" y="' + g + '" dy="' + h * c[1] + '">' + i + "</tspan>"
            }
            return d
        },
        s = function(a, b, c) {
            a[a.length] = '<path d="' + c.join(" ") + '" ' + g(b) + " />"
        },
        t = function(a, c, d, e, f) {
            var g = [];
            return s(g, b.extend({
                style: 3,
                fillStyle: a.strokeStyle || "#000",
                strokeStyle: a.strokeStyle || "#000"
            }, a), b.arrowHeaderPath(c, d, e, f)), g.join("")
        },
        u = function(a, c) {
            var d = c.hz || 12,
                e = [c.x, c.y],
                f = [c.x + c.w, c.y + c.h],
                g = null,
                h = 0,
                i = 0;
            null == c.header || isNaN(c.header) || (h = 15 & c.header, i = (240 & c.header) >> 4);
            var j = e,
                k = "";
            if (b.isArray(c.ex) && c.ex.length > 0) {
                if (c.ex.length > 0) {
                    var l = 0;
                    h && (l = c.ex.length - 1, g = c.ex[l], j = [g.dx + c.x, g.dy + c.y], k += t(c, j, f, d, h)), i && (l = 0, g = c.ex[l], j = [g.dx + c.x, g.dy + c.y], k += t(c, j, e, d, i))
                }
            } else c.ex && !b.isArray(c.ex) ? (j = [c.ex.dx + c.x, c.ex.dy + c.y], h && (k += t(c, j, f, d, h)), i && (k += t(c, j, e, d, i))) : (h && (k += t(c, e, f, d, h)), i && (k += t(c, f, e, d, i)));
            a[a.length] = k
        },
        v = function(a) {
            this._ctx = a, this._tag = []
        };
    v.prototype = {
        renderer: function(a, c) {
            b.renderer(this, a, c)
        },
        _buildText: function(a, b) {
            p(this._tag, a, b)
        },
        _buildHeader: function(a) {
            u(this._tag, a)
        },
        _buildPath: function(a, b) {
            s(this._tag, a, b)
        },
        toString: function() {
            return this._tag.join("")
        }
    };
    var w = function(a) {
        this._ctx = a
    };
    return w.prototype = {
        renderer: function(a, c) {
            b.renderer(this, a, c)
        },
        _buildText: function(a, b) {
            p(this._ctx, a, b)
        },
        _buildHeader: function(a) {
            u(this._ctx, a)
        },
        _buildPath: function(a, b) {
            s(this._ctx, a, b)
        },
        save: function() {},
        restore: function() {},
        clear: function() {},
        scale: function() {},
        parse: function(a, b) {
            var c = '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg id="svg1" width="' + a.w + '" height="' + a.h + '" version="1.1" xmlns="http://www.w3.org/2000/svg">';
            c += h(a.d, this);
            var d = new v(this);
            return d.renderer(a.d, b), c += d.toString(), c += "</svg>"
        }
    }, {
        create: function(a) {
            return new w(a)
        }
    }
}); /*! jh2d 2016-09-01 */
! function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jh2d"], b) : "undefined" != typeof module && module.exports ? module.exports = b(require("jh2d")) : a.jh2d.types(b(a.jh2d))
}(this, function(a) {
    var b = a.util,
        c = b.describeArc,
        d = b.describeArcL,
        e = b.calcExArc,
        f = function(a) {
            var b = a.ex = a.ex || {
                    dx: 3 * a.w / 4,
                    dy: -10
                },
                c = b.dx,
                d = a.y + a.h / 2,
                e = ["M", a.x, a.y, "L", a.x + c, a.y, "L", a.x + a.w, d, "L", a.x + c, a.y + a.h, "L", a.x, a.y + a.h, "Z"];
            return e
        },
        g = function(a) {
            var b = a.ex = a.ex || {
                    dx: 3 * a.w / 4,
                    dy: -10
                },
                c = b.dx,
                d = a.y + a.h / 2,
                e = ["M", a.x, a.y, "L", a.x + c, a.y, "L", a.x + a.w, d, "L", a.x + c, a.y + a.h, "L", a.x, a.y + a.h, "L", a.x + a.w - c, d, "Z"];
            return e
        },
        h = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w - a.w / 5,
                    dy: a.h / 5
                },
                c = b.dx,
                d = b.dy,
                e = a.y + a.h / 2,
                f = ["M", a.x + c, a.y + d, "L", a.x + c, a.y, "L", a.x + a.w, e, "L", a.x + c, a.y + a.h, "L", a.x + c, 2 * e - a.y - d, "L", a.x, 2 * e - a.y - d, "L", a.x + (a.w - c) * (1 - 2 * d / a.h), e, "L", a.x, a.y + d, "Z"];
            return f
        },
        i = function(a, b) {
            var c = a.ex = a.ex || [{
                    dx: 3 * a.w / 8,
                    dy: a.h / 8
                }, {
                    dx: 1 * a.w / 4,
                    dy: -10
                }],
                d = c[0].dx,
                e = c[0].dy,
                f = c[1].dx,
                g = a.x + a.w / 2,
                h = a.y + a.h / 2;
            3 === b && (h += f / a.w * a.h);
            var i = [a.x + d, h - a.h * (g - (a.x + d)) / a.w],
                j = [a.x + d, a.y + e],
                k = [a.x + f, j[1]],
                l = [g, a.y],
                m = [2 * g - k[0], k[1]],
                n = [2 * g - j[0], j[1]],
                o = [2 * g - i[0], i[1]],
                p = [a.x + a.w - e / a.h * a.w, i[1]],
                q = [p[0], h - (a.w / 2 - f) / a.w * a.h],
                r = [a.x + a.w, h],
                s = [q[0], 2 * h - q[1]],
                t = [p[0], 2 * h - p[1]],
                u = ["M", i[0], i[1], "L", j[0], j[1], "L", k[0], k[1], "L", l[0], l[1], "L", m[0], m[1], "L", n[0], n[1], "L", o[0], o[1], "L", p[0], p[1], "L", q[0], q[1], "L", r[0], r[1], "L", s[0], s[1], "L", t[0], t[1], "L", o[0], 2 * h - o[1]],
                v = ["L", n[0], 2 * h - n[1], "L", m[0], 2 * h - m[1], "L", l[0], 2 * h - l[1], "L", k[0], 2 * h - k[1], "L", j[0], 2 * h - j[1]],
                w = ["L", i[0], 2 * h - i[1], "L", 2 * g - t[0], t[1], "L", 2 * g - s[0], s[1], "L", 2 * g - r[0], r[1], "L", 2 * g - q[0], q[1], "L", 2 * g - p[0], p[1], "Z"];
            return 3 !== b && (u = u.concat(v)), u = u.concat(w)
        },
        j = function(a) {
            return i(a, 3)
        },
        k = function(a, b) {
            var c = a.ex = a.ex || [{
                    dx: a.w / 2,
                    dy: a.h / 4
                }, {
                    dx: 3 * a.w / 8,
                    dy: -10
                }],
                d = c[0].dx,
                e = c[0].dy,
                f = c[1].dx,
                g = a.x + (a.w - f) / 2 + f,
                h = [a.x + d, a.y + e],
                i = [a.x + f, h[1]],
                j = [g, a.y],
                k = [2 * g - i[0], i[1]],
                l = [2 * g - h[0], h[1]],
                m = f / a.w * a.h,
                n = a.y + m + (a.h - m) / 2,
                o = e / a.h * a.w,
                p = d / a.w * a.h,
                q = [a.x + o, a.y + p],
                r = [q[0], a.y + m],
                s = [a.x, n],
                t = [r[0], 2 * n - r[1]],
                u = [q[0], 2 * n - q[1]],
                v = [l[0], 1 === b ? a.y + a.h : u[1]],
                w = [h[0], 1 === b ? q[1] + (v[1] - u[1]) : q[1]];
            1 === b && (u = [a.x, v[1]], q = [a.x, w[1]]);
            var x = ["M", h[0], h[1], "L", i[0], i[1], "L", j[0], j[1], "L", k[0], k[1], "L", l[0], l[1], "L", v[0], v[1], "L", u[0], u[1]];
            return 1 !== b && (x = x.concat(["L", t[0], t[1], "L", s[0], s[1], "L", r[0], r[1]])), x = x.concat(["L", q[0], q[1], "L", w[0], w[1], "Z"])
        },
        l = function(a) {
            return k(a, 1)
        },
        m = function(a) {
            var b = a.ex = a.ex || {
                    dx: 2 * a.w / 3,
                    dy: a.h / 5
                },
                c = b.dx,
                d = b.dy,
                e = a.y + a.h / 2,
                f = [a.x + c, a.y + d],
                g = [f[0], a.y],
                h = [a.x + a.w, a.y + a.h / 3],
                i = [g[0], 2 * h[1] - g[1]],
                j = [f[0], 2 * h[1] - f[1]],
                k = j[1] - f[1],
                l = [a.x + k, i[1]],
                m = [l[0], j[1]],
                n = [l[0], a.y + a.h],
                o = [a.x, n[1]],
                p = [a.x, e],
                q = [a.x, f[1]],
                r = ["M", g[0], g[1], "L", h[0], h[1], "L", i[0], i[1], "L", j[0], j[1], "Q", m[0], m[1], l[0], l[1], "L", n[0], n[1], "L", o[0], o[1], "L", p[0], p[1], "Q", q[0], q[1], f[0], f[1], "Z"];
            return r
        },
        n = function(a) {
            var b = [a.x + 3 * a.w / 4, a.y + 2 * a.h / 3],
                c = [a.x + a.w, a.y + 3 * a.h / 8],
                d = [a.x + 7 * a.w / 8, c[1]],
                e = [a.x + (d[0] - a.x) / 2, a.y],
                f = [d[0], a.y],
                g = [a.x, a.y],
                h = [a.x, d[1]],
                i = [a.x, a.y + a.h],
                j = [2 * b[0] - c[0], c[1]],
                k = [2 * b[0] - d[0], d[1]],
                l = [e[0], a.y + a.h / 4],
                m = [2 * l[0] - k[0], k[1]],
                n = [m[0], i[1]],
                o = [m[0], l[1]],
                p = [k[0], l[1]],
                q = ["M", b[0], b[1], "L", c[0], c[1], "L", d[0], d[1], "Q", f[0], f[1], e[0], e[1], "Q", g[0], g[1], h[0], h[1], "L", i[0], i[1], "L", n[0], n[1], "L", m[0], m[1], "Q", o[0], o[1], l[0], l[1], "Q", p[0], p[1], k[0], k[1], "L", j[0], j[1], "Z"];
            return q
        },
        o = function(a) {
            var b = a.ex = a.ex || [{
                    dx: 2 * a.w / 3,
                    dy: -10
                }, {
                    dx: 5 * a.w / 6,
                    dy: 3 * a.h / 8
                }, {
                    dx: a.w + 10,
                    dy: a.h / 4
                }],
                c = b[0].dx,
                d = b[1].dx,
                e = b[1].dy,
                f = b[2].dy,
                g = [a.x + c, a.y],
                h = [g[0], a.y + e],
                i = [a.x + d, a.y + e],
                j = [i[0], a.y + f],
                k = [a.x + a.w, a.y + a.h / 2],
                l = [j[0], 2 * k[1] - j[1]],
                m = [i[0], 2 * k[1] - i[1]],
                n = [h[0], 2 * k[1] - h[1]],
                o = [n[0], a.y + a.h],
                p = [a.x, a.y + a.h],
                q = [a.x, a.y],
                r = ["M", g[0], g[1], "L", h[0], h[1], "L", i[0], i[1], "L", j[0], j[1], "L", k[0], k[1], "L", l[0], l[1], "L", m[0], m[1], "L", n[0], n[1], "L", o[0], o[1], "L", p[0], p[1], "L", q[0], q[1], "Z"];
            return r
        },
        p = function(a) {
            return a.initRotate = a.initRotate || Math.PI, o(a)
        },
        q = function(a) {
            var b = a.x,
                c = a.y,
                d = a.w,
                e = a.h,
                f = a.ex = a.ex || [{
                    dy: 2 * e / 3,
                    dx: -10
                }, {
                    dy: 5 * e / 6,
                    dx: 3 * d / 8
                }, {
                    dy: e + 10,
                    dx: d / 4
                }],
                g = f[0].dy,
                h = f[1].dy,
                i = f[1].dx,
                j = f[2].dx,
                k = [b, c + g],
                l = [b + i, k[1]],
                m = [b + i, c + h],
                n = [b + j, m[1]],
                o = [b + d / 2, c + e],
                p = [2 * o[0] - n[0], n[1]],
                q = [2 * o[0] - m[0], m[1]],
                r = [2 * o[0] - l[0], l[1]],
                s = [b + d, r[1]],
                t = [b + d, c],
                u = [b, c],
                v = ["M", k[0], k[1], "L", l[0], l[1], "L", m[0], m[1], "L", n[0], n[1], "L", o[0], o[1], "L", p[0], p[1], "L", q[0], q[1], "L", r[0], r[1], "L", s[0], s[1], "L", t[0], t[1], "L", u[0], u[1], "Z"];
            return v
        },
        r = function(a) {
            return a.initRotate = a.initRotate || Math.PI, q(a)
        },
        s = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 5,
                    dy: a.h / 5
                },
                c = b.dx,
                d = b.dy,
                e = a.y + a.h / 2,
                f = ["M", a.x + c, a.y + d, "L", a.x + c, a.y, "L", a.x, e, "L", a.x + c, a.y + a.h, "L", a.x + c, 2 * e - a.y - d, "L", a.x + a.w, 2 * e - a.y - d, "L", a.x + a.w, a.y + d, "Z"];
            return f
        },
        t = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w - a.w / 5,
                    dy: a.h / 5
                },
                c = b.dx,
                d = b.dy,
                e = a.y + a.h / 2,
                f = ["M", a.x + c, a.y + d, "L", a.x + c, a.y, "L", a.x + a.w, e, "L", a.x + c, a.y + a.h, "L", a.x + c, 2 * e - a.y - d, "L", a.x, 2 * e - a.y - d, "L", a.x, a.y + d, "Z"];
            return f
        },
        u = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 5,
                    dy: a.h / 5
                },
                c = b.dx,
                d = b.dy,
                e = a.x + a.w / 2,
                f = a.y + a.h / 2,
                g = ["M", a.x + c, a.y + d, "L", a.x + c, a.y, "L", a.x, f, "L", a.x + c, a.y + a.h, "L", a.x + c, 2 * f - a.y - d, "L", 2 * e - a.x - c, 2 * f - a.y - d, "L", 2 * e - a.x - c, a.y + a.h, "L", a.x + a.w, f, "L", 2 * e - a.x - c, a.y, "L", 2 * e - a.x - c, a.y + d, "Z"];
            return g
        },
        v = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 5,
                    dy: a.h / 5
                },
                c = b.dx,
                d = b.dy,
                e = a.x + a.w / 2,
                f = ["M", a.x + c, a.y + d, "L", a.x, a.y + d, "L", e, a.y, "L", a.x + a.w, a.y + d, "L", 2 * e - a.x - c, a.y + d, "L", 2 * e - a.x - c, a.y + a.h, "L", a.x + c, a.y + a.h, "Z"];
            return f
        },
        w = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 5,
                    dy: a.h - a.h / 5
                },
                c = b.dx,
                d = b.dy,
                e = a.x + a.w / 2,
                f = ["M", a.x + c, a.y + d, "L", a.x, a.y + d, "L", e, a.y + a.h, "L", a.x + a.w, a.y + d, "L", 2 * e - a.x - c, a.y + d, "L", 2 * e - a.x - c, a.y, "L", a.x + c, a.y, "Z"];
            return f
        },
        x = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 5,
                    dy: a.h / 5
                },
                c = b.dx,
                d = b.dy,
                e = a.x + a.w / 2,
                f = a.y + a.h / 2,
                g = ["M", a.x + c, a.y + d, "L", a.x, a.y + d, "L", e, a.y, "L", a.x + a.w, a.y + d, "L", 2 * e - a.x - c, a.y + d, "L", 2 * e - a.x - c, 2 * f - a.y - d, "L", a.x + a.w, 2 * f - a.y - d, "L", e, a.y + a.h, "L", a.x, 2 * f - a.y - d, "L", a.x + c, 2 * f - a.y - d, "Z"];
            return g
        },
        y = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w - a.w / 5,
                    dy: a.h / 5
                },
                c = b.dx,
                d = b.dy,
                e = a.y + a.h / 2,
                f = a.w / 8,
                g = f / 5,
                h = ["M", a.x + c, a.y + d, "L", a.x + c, a.y, "L", a.x + a.w, e, "L", a.x + c, a.y + a.h, "L", a.x + c, 2 * e - a.y - d, "L", a.x + f, 2 * e - a.y - d, "L", a.x + f, a.y + d, "Z", "M", a.x, a.y + d, "L", a.x + g, a.y + d, "L", a.x + g, 2 * e - a.y - d, "L", a.x, 2 * e - a.y - d, "Z", "M", a.x + 2 * g, a.y + d, "L", a.x + 4 * g, a.y + d, "L", a.x + 4 * g, 2 * e - a.y - d, "L", a.x + 2 * g, 2 * e - a.y - d, "Z"];
            return h
        },
        z = function(a, b) {
            var e = a.ex = a.ex || [{
                    dx: a.w / 2,
                    dy: 0
                }, {
                    dx: a.w,
                    dy: a.h / 3
                }, {
                    dx: 5 * a.w / 6,
                    dy: a.h / 3
                }],
                f = a.w / 2,
                g = Math.asin((e[1].dy - (b ? a.h : 0)) / a.h),
                h = Math.PI / 2 * (b ? -1 : 1),
                i = f * Math.cos(g),
                j = f + i - e[0].dx,
                k = a.w - j / 2,
                l = k / 2 * Math.cos(g),
                m = a.x + k / 2 + l,
                n = 2 * m - (a.x + e[2].dx),
                o = (n - a.x) / (1 + Math.cos(g)),
                p = a.x + o,
                q = a.y + (b ? a.h : 0),
                r = a.x + e[2].dx - o * Math.cos(g),
                s = c(p, q, o, a.h, Math.acos((r - p) / 2 / o) * (b ? -1 : 1), g, !!b, 0);
            s = s.concat(["L", a.x + e[0].dx, a.y + e[1].dy, "L", a.x + k, q, "L", 2 * m - a.x - e[0].dx, a.y + e[1].dy]), s = s.concat(d(r, q, o, a.h, g, h, !b, 0));
            var t = c(r, q, o, a.h, h, Math.PI, !b, 0);
            return t = t.concat(d(p, q, o, a.h, Math.PI, h, !!b, 0)), t = t.concat("Z"), [s.concat(t), t]
        },
        A = function(a) {
            return a.ex = a.ex || [{
                dx: a.w / 2,
                dy: a.h
            }, {
                dx: a.w,
                dy: 2 * a.h / 3
            }, {
                dx: 5 * a.w / 6,
                dy: 2 * a.h / 3
            }], z(a, !0)
        },
        B = function(a, b) {
            var e = a.ex = a.ex || [{
                    dy: a.h / 2,
                    dx: 0
                }, {
                    dy: a.h,
                    dx: a.w / 3
                }, {
                    dy: 5 * a.h / 6,
                    dx: a.w / 3
                }],
                f = a.h / 2,
                g = Math.acos((e[1].dx - (b ? a.w : 0)) / a.w),
                h = b ? Math.PI : 0,
                i = f * Math.sin(g),
                j = f + i - e[0].dy,
                k = a.h - j / 2,
                l = k / 2 * Math.sin(g),
                m = a.y + k / 2 + l,
                n = 2 * m - (a.y + e[2].dy),
                o = (n - a.y) / (1 + Math.sin(g)),
                p = a.y + o,
                q = a.x + (b ? a.w : 0),
                r = a.y + e[2].dy - o * Math.sin(g),
                s = c(q, p, a.w, o, Math.asin((r - p) / 2 / o) + h, g, !b, 0);
            s = s.concat(["L", a.x + e[1].dx, a.y + e[0].dy, "L", q, a.y + k, "L", a.x + e[1].dx, 2 * m - a.y - e[0].dy]), s = s.concat(d(q, r, a.w, o, g, h, !!b, 0));
            var t = c(q, r, a.w, o, h, -Math.PI / 2, !!b, 0);
            return t = t.concat(d(q, p, a.w, o, -Math.PI / 2, h, !b, 0)), t = t.concat("Z"), [s.concat(t), t]
        },
        C = function(a) {
            return a.ex = a.ex || [{
                dy: a.h / 2,
                dx: a.w
            }, {
                dy: a.h,
                dx: 2 * a.w / 3
            }, {
                dy: 5 * a.h / 6,
                dx: 2 * a.w / 3
            }], B(a, !0)
        },
        D = function(a) {
            var b = a.ex = a.ex || [{
                    dx: 0,
                    dy: a.h / 2
                }, {
                    dx: a.w / 4,
                    dy: 2 * a.h / 3
                }],
                f = a.w / 2,
                g = a.h / 2,
                h = a.x + f,
                i = a.y + g,
                j = e(a),
                k = j[0],
                l = j[1],
                m = 0,
                n = 0;
            b[1].dy - g === 0 ? (m = b[1].dx - f, n = a.h * (m / a.w)) : b[1].dx - f === 0 ? (n = b[1].dy - g, m = a.w * (n / a.h)) : (m = (b[1].dx - f) / Math.cos(l), n = (b[1].dy - g) / Math.sin(l));
            var o = Math.abs(l - k) > Math.PI ? 1 : 0,
                p = (f + m) / 2,
                q = (g + n) / 2,
                r = l + Math.PI / 6,
                s = h + p * Math.cos(r),
                t = i + q * Math.sin(r),
                u = h + (p + a.w / 5) * Math.cos(l),
                v = i + (q + a.h / 5) * Math.sin(l),
                w = h + (p - a.w / 5) * Math.cos(l),
                x = i + (q - a.h / 5) * Math.sin(l),
                y = c(h, i, f, g, k, l, !0, o);
            return y = y.concat(["L", u, v]), y = y.concat(["L", s, t]), y = y.concat(["L", w, x]), m = Math.abs(m), n = Math.abs(n), y = y.concat(d(h, i, m, n, l, k, !1, o)), y = y.concat("Z")
        };
    return {
        larrow: s,
        rarrow: t,
        lrarrow: u,
        uarrow: v,
        darrow: w,
        udarrow: x,
        stripedrarrow: y,
        pentagon: f,
        forkedtail: g,
        forkedtailarrow: h,
        crossarrow: i,
        lruarrow: j,
        luarrow: k,
        bentuparrow: l,
        bentarrow: m,
        uturnarrow: n,
        rarrowcallout: o,
        larrowcallout: p,
        darrowcallout: q,
        uarrowcallout: r,
        curveduarraow: z,
        curveddarraow: A,
        curvedlarraow: B,
        curvedrarraow: C,
        circulararrow: D
    }
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jh2d"], b) : "undefined" != typeof module && module.exports ? module.exports = b(require("jh2d")) : a.jh2d.types(b(a.jh2d))
}(this, function(a) {
    var b = a.util,
        c = b.describeArc,
        d = b.describeArcL,
        e = b.calcExArc,
        f = .6,
        g = .8,
        h = function(a) {
            var b = a.x,
                c = a.y,
                d = a.w,
                e = a.h,
                h = ["M", b, c + e * g, "C"],
                j = i(b, c, d, e);
            return h.concat(j).concat([b + d, c + e * f, "L", b + d, c, "L", b, c, "Z"])
        },
        i = function(a, b, c, d) {
            return [a + c / 4, b + d * (2 - g), a + c / 2, b + d * f]
        },
        j = function(a) {
            for (var b = a.x, c = a.y, d = a.w, e = a.h, h = .8 * d, j = .8 * e, k = c + e * g, l = b, m = [], n = 0; n < 3; n++) {
                var o = b + n * d * .1,
                    p = c + e * (.2 - .1 * n);
                m = m.concat(["M", o, k, "L", o, p, "L", o + h, p, "L", o + h, p + j * f]);
                var q = [o + h, p + j * f];
                if (0 === n) {
                    var r = i(o, p, h, j);
                    m = m.concat(["M", l, k, "C"]).concat(r).concat(q)
                } else m = m.concat(["L", l, p + j * f]);
                k = p, l = o + h
            }
            return m
        },
        k = function(a) {
            var b = ["M", a.x + a.w / 6, a.y + a.h, "C", a.x, a.y + a.h, a.x, a.y + a.h / 2, a.x + a.w / 6, a.y + a.h / 2],
                c = ["C", a.x + a.w / 6, a.y + a.h / 3, a.x + a.w / 4, a.y + 2 * a.h / 9],
                d = [a.x + a.w / 3, a.y + a.h / 4, "C", a.x + a.w / 3, a.y - a.h / 7, a.x + 3 * a.w / 4, a.y - a.h / 7],
                e = [a.x + a.w - a.w / 5, a.y + a.h / 3, "C", a.x + a.w, a.y + a.h / 3, a.x + a.w, a.y + a.h, a.x + a.w - a.w / 5, a.y + a.h],
                f = b.concat(c).concat(d).concat(e).concat("Z");
            return f
        },
        l = function(a) {
            var b = ["M", a.x, a.y + a.h / 4, "Q", a.x, a.y, a.x + a.w / 2, a.y + a.h / 6],
                c = ["Q", a.x + a.w, a.y, a.x + a.w, a.y + a.h / 4],
                d = ["Q", a.x + a.w, a.y + a.h / 2, a.x + a.w / 2, a.y + a.h],
                e = b.concat(c).concat(d).concat(["Q", a.x, a.y + a.h / 2, a.x, a.y + a.h / 4, "Z"]);
            return e
        },
        m = function(a, c, d) {
            for (var e = b.polygon(a, c, d), f = ["M", e[0][0], e[0][1]], g = 1; g < e.length; g++) f = f.concat(["L", e[g][0], e[g][1]]);
            return f.concat("Z")
        },
        n = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 2,
                    dy: 0
                },
                c = [a.x, a.y + a.h],
                d = [a.x + a.w, a.y + a.h],
                e = [a.x + b.dx, a.y + b.dy],
                f = ["M", c[0], c[1], "L", d[0], d[1], "L", e[0], e[1], "Z"];
            return f
        },
        o = function(a) {
            var b = [a.x + a.w / 2, a.y],
                c = [a.x + a.w, a.y + a.h / 2],
                d = [a.x + a.w / 2, a.y + a.h],
                e = [a.x, a.y + a.h / 2],
                f = ["M", b[0], b[1], "L", c[0], c[1], "L", d[0], d[1], "L", e[0], e[1], "Z"];
            return f
        },
        p = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 4,
                    dy: -10
                },
                c = [a.x + b.dx, a.y],
                d = [a.x + a.w, a.y],
                e = [a.x + a.w - b.dx, a.y + a.h],
                f = [a.x, a.y + a.h],
                g = ["M", c[0], c[1], "L", d[0], d[1], "L", e[0], e[1], "L", f[0], f[1], "Z"];
            return g
        },
        q = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 4,
                    dy: a.h + 10
                },
                c = [a.x, a.y],
                d = [a.x + a.w, a.y],
                e = [a.x + a.w - b.dx, a.y + a.h],
                f = [a.x + b.dx, a.y + a.h],
                g = ["M", c[0], c[1], "L", d[0], d[1], "L", e[0], e[1], "L", f[0], f[1], "Z"];
            return void 0 === a.initRotate && (a.initRotate = Math.PI), g
        },
        r = function(a) {
            var b = a.ex.dx < a.w / 2 ? a.w : 0,
                c = 0 === b ? a.w : 0,
                d = [a.x + b, a.y],
                e = [a.x + c, a.y],
                f = [a.x + c, a.y + a.ex.dy],
                g = [a.x + c, a.y + a.h - a.ex.dy],
                h = [a.x + c, a.y + a.h],
                i = [a.x + b, a.y + a.h],
                j = ["M", d[0], d[1], "Q", e[0], e[1], f[0], f[1], "L", g[0], g[1], "Q", h[0], h[1], i[0], i[1]];
            return a.style = 2, j
        },
        s = function(a) {
            return a.ex = a.ex || {
                dx: -10,
                dy: a.h / 6
            }, r(a)
        },
        t = function(a) {
            return a.ex = a.ex || {
                dx: a.w + 10,
                dy: a.h / 6
            }, r(a)
        },
        u = function(a) {
            for (var b = a.ex = a.ex || {
                    dx: a.w / 4,
                    dy: a.h / 6
                }, c = [b.dx, a.w - b.dx], d = [], e = 0; e < 2; e++) {
                var f = 0 === e ? 0 : a.w,
                    g = [a.x + c[e], a.y],
                    h = [a.x + f, a.y],
                    i = [a.x + f, a.y + b.dy],
                    j = [a.x + f, a.y + a.h - b.dy],
                    k = [a.x + f, a.y + a.h],
                    l = [a.x + c[e], a.y + a.h];
                d = d.concat(["M", g[0], g[1], "Q", h[0], h[1], i[0], i[1], "L", j[0], j[1], "Q", k[0], k[1], l[0], l[1]])
            }
            return a.style = 2, d
        },
        v = function(a) {
            var b = a.ex[0].dx <= a.w / 2 ? a.w : 0,
                c = a.ex,
                d = Math.min(c[0].dy, a.w / 2),
                e = 0 === b ? a.w : 0,
                f = [a.x + b, a.y],
                g = [a.x + a.w / 2, a.y],
                h = [a.x + a.w / 2, a.y + d],
                i = a.y + c[1].dy;
            i < a.y + 2 * d && (i = a.y + 2 * d), i > a.y + a.h - 2 * d && (i = a.y + a.h - 2 * d);
            var j = [a.x + a.w / 2, i - d],
                k = [a.x + a.w / 2, i],
                l = [a.x + e, i],
                m = [a.x + a.w / 2, i],
                n = [a.x + a.w / 2, i + d],
                o = [a.x + a.w / 2, a.y + a.h - d],
                p = [a.x + a.w / 2, a.y + a.h],
                q = [a.x + b, a.y + a.h],
                r = ["M", f[0], f[1], "Q", g[0], g[1], h[0], h[1], "L", j[0], j[1], "Q", k[0], k[1], l[0], l[1], "Q", m[0], m[1], n[0], n[1], "L", o[0], o[1], "Q", p[0], p[1], q[0], q[1]];
            return a.style = 2, r
        },
        w = function(a) {
            return a.ex = a.ex || [{
                dx: a.w / 2,
                dy: a.w / 4
            }, {
                dx: -10,
                dy: a.h / 2
            }], v(a)
        },
        x = function(a) {
            return a.ex = a.ex || [{
                dx: a.w / 2 + 1,
                dy: a.w / 4
            }, {
                dx: a.w + 10,
                dy: a.h / 2
            }], v(a)
        },
        y = function(a) {
            for (var b = a.ex = a.ex || [{
                    dx: a.w / 4,
                    dy: a.w / 4
                }, {
                    dx: -10,
                    dy: a.h / 2
                }], c = [b[0].dx, a.w - b[0].dx], d = [], e = Math.min(b[0].dy, b[0].dx / 2), f = 0; f < 2; f++) {
                var g = 0 === f ? 0 : a.w,
                    h = 0 === f ? c[0] / 2 : a.w - c[0] / 2,
                    i = [a.x + c[f], a.y],
                    j = [a.x + h, a.y],
                    k = [a.x + h, a.y + e],
                    l = a.y + b[1].dy;
                l < a.y + 2 * e && (l = a.y + 2 * e), l > a.y + a.h - 2 * e && (l = a.y + a.h - 2 * e);
                var m = [a.x + h, l - e],
                    n = [a.x + h, l],
                    o = [a.x + g, l],
                    p = [a.x + h, l],
                    q = [a.x + h, l + e],
                    r = [a.x + h, a.y + a.h - e],
                    s = [a.x + h, a.y + a.h],
                    t = [a.x + c[f], a.y + a.h];
                d = d.concat(["M", i[0], i[1], "Q", j[0], j[1], k[0], k[1], "L", m[0], m[1], "Q", n[0], n[1], o[0], o[1], "Q", p[0], p[1], q[0], q[1], "L", r[0], r[1], "Q", s[0], s[1], t[0], t[1]])
            }
            return a.style = 2, d
        },
        z = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 4,
                    dy: a.h / 4
                },
                c = b.dx,
                d = b.dy,
                e = a.x + a.w / 2,
                f = a.y + a.h / 2,
                g = [a.x + c, a.y + d],
                h = [a.x + c, a.y],
                i = [2 * e - g[0], a.y],
                j = [2 * e - g[0], a.y + d],
                k = [a.x + a.w, a.y + d],
                l = [a.x + a.w, 2 * f - k[1]],
                m = [2 * e - g[0], 2 * f - j[1]],
                n = [2 * e - g[0], a.y + a.h],
                o = [a.x + c, a.y + a.h],
                p = [a.x + c, 2 * f - g[1]],
                q = [a.x, 2 * f - g[1]],
                r = [a.x, a.y + d],
                s = ["M", g[0], g[1], "L", h[0], h[1], "L", i[0], i[1], "L", j[0], j[1], "L", k[0], k[1], "L", l[0], l[1], "L", m[0], m[1], "L", n[0], n[1], "L", o[0], o[1], "L", p[0], p[1], "L", q[0], q[1], "L", r[0], r[1], "Z"];
            return s
        },
        A = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 4,
                    dy: a.h / 4
                },
                c = b.dx,
                d = b.dy,
                e = a.x + a.w / 2,
                f = a.y + a.h / 2,
                g = [a.x, a.y + d],
                h = [a.x + c, a.y + d],
                i = [a.x + c, a.y],
                j = [2 * e - i[0], a.y],
                k = [2 * e - h[0], a.y + d],
                l = [a.x + a.w, a.y + d],
                m = [a.x + a.w, 2 * f - l[1]],
                n = [k[0], 2 * f - k[1]],
                o = [j[0], a.y + a.h],
                p = [a.x + c, a.y + a.h],
                q = [a.x + c, 2 * f - h[1]],
                r = [a.x, 2 * f - g[1]],
                s = ["M", g[0], g[1], "Q", h[0], h[1], i[0], i[1], "L", j[0], j[1], "Q", k[0], k[1], l[0], l[1], "L", m[0], m[1], "Q", n[0], n[1], o[0], o[1], "L", p[0], p[1], "Q", q[0], q[1], r[0], r[1], "Z"];
            return s
        },
        B = function(a) {
            var b = a.w / 5,
                c = a.w / 10,
                d = a.h / 20,
                e = [a.x + 2 * a.w / 5, a.y],
                f = [e[0] + b, a.y + a.h / 4],
                g = [f[0] - c, f[1] + d],
                h = [f[0] + b, a.y + a.h / 2 + d],
                i = [h[0] - c, h[1] + d],
                j = [a.x + a.w, a.y + a.h],
                k = [e[0], j[1] - a.h / 3],
                l = [g[0], k[1] - d],
                m = [a.x + a.w / 4, a.y + a.h / 2 - d],
                n = [e[0], m[1] - d],
                o = [a.x, a.y + a.h / 6],
                p = ["M", e[0], e[1], "L", f[0], f[1], "L", g[0], g[1], "L", h[0], h[1], "L", i[0], i[1], "L", j[0], j[1], "L", k[0], k[1], "L", l[0], l[1], "L", m[0], m[1], "L", n[0], n[1], "L", o[0], o[1], "Z"];
            return p
        },
        C = function(a) {
            a.ex = a.ex || [{
                dx: a.w,
                dy: a.h / 2
            }, {
                dx: a.w / 2,
                dy: 0
            }];
            var b = a.x + a.w / 2,
                d = a.y + a.h / 2,
                f = a.w / 2,
                g = a.h / 2,
                h = e(a),
                i = h[0],
                j = h[1],
                k = Math.abs(j - i) >= Math.PI ? 1 : 0,
                l = c(b, d, f, g, i, j, !0, k);
            return l = l.concat(["L", b, d, "Z"])
        },
        D = function(a) {
            a.ex = a.ex || [{
                dx: a.w,
                dy: a.h / 2
            }, {
                dx: a.w / 2,
                dy: 0
            }];
            var b = a.x + a.w / 2,
                d = a.y + a.h / 2,
                f = a.w / 2,
                g = a.h / 2,
                h = e(a),
                i = h[0],
                j = h[1],
                k = c(b, d, f, g, j, i);
            return k = k.concat(["Z"])
        },
        E = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w,
                    dy: 0
                },
                d = a.x + a.w / 2,
                e = a.y + a.h / 2,
                f = a.w / 2,
                g = a.h / 2,
                h = [a.x + b.dx, a.y + b.dy],
                i = [a.x + a.w, a.y],
                j = c(d, e, f, g, 3 * Math.PI / 2, 0),
                k = j.slice(1, 3);
            return j = j.concat(["Q", i[0], i[1], h[0], h[1]]), j = j.concat(["Q", i[0], i[1], k[0], k[1]]), j = j.concat("Z")
        },
        F = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 5,
                    dy: a.h / 5
                },
                d = b.dx,
                e = b.dy,
                f = a.w / 2,
                g = a.h / 2,
                h = a.x + f,
                i = a.y + g,
                j = c(h, i, f, g, 0, .001);
            return j = j.concat(["Z"]).concat(c(h, i, f - d, g - e, 0, -.001, !0)).concat("Z")
        },
        G = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 5,
                    dy: 0
                },
                d = Math.min(b.dx, Math.min(a.h, a.w) / 2),
                e = a.w / 2,
                f = a.h / 2,
                g = a.x + e,
                h = a.y + f;
            d = Math.max(d, 0);
            var i = c(g, h, e, f, 2 * Math.PI - .001, 0),
                j = 2 * d / a.w,
                k = Math.PI / 4,
                l = {
                    x: a.x + d,
                    y: a.y + d,
                    w: a.w - 2 * d,
                    h: a.h - 2 * d
                },
                m = l.w / 2,
                n = l.h / 2,
                o = l.x + m,
                p = l.y + n,
                q = {
                    x: a.x + d,
                    y: a.y + d,
                    w: a.w - 2 * d,
                    h: a.h - 2 * d
                },
                r = q.w / 2,
                s = q.h / 2,
                t = q.x + r,
                u = q.y + s,
                v = c(o, p, m, n, k - Math.PI - j * (k - Math.PI), k - j * k, !0, 0),
                w = c(t, u, r, s, k - 2 * Math.PI - j * (k - Math.PI), k - j * k - Math.PI, !0, 0);
            return i.concat("Z").concat(v).concat("Z").concat(w).concat("Z")
        },
        H = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 2,
                    dy: a.h
                },
                d = b.dx,
                e = b.dy,
                f = a.w / 6,
                g = a.h / 6,
                h = a.w / 2,
                i = a.h / 2,
                j = a.x + h,
                k = a.y + i,
                l = {
                    x: a.x + a.w / 3 - f / 2,
                    y: a.y + a.h / 3 - g / 2,
                    w: f,
                    h: g
                },
                m = l.w / 2,
                n = l.h / 2,
                o = l.x + m,
                p = l.y + n,
                q = c(j, k, h, i, 2 * Math.PI - .001, 0),
                r = c(o, p, m, n, 2 * Math.PI - .001, 0);
            l.x = 2 * j - a.x - a.w / 3 - f / 2, o = l.x + m;
            var s = c(o, p, m, n, 2 * Math.PI - .001, 0),
                t = [a.x + a.w / 5, a.y + 2 * a.h / 3],
                u = [2 * j - t[0], t[1]],
                v = ["M", t[0], t[1], "Q", a.x + d, a.y + e, u[0], u[1]];
            return q.concat("Z").concat(r).concat("Z").concat(s).concat("Z").concat(v)
        },
        I = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 8,
                    dy: a.h / 2
                },
                d = a.x + a.w / 2,
                e = a.y + a.h / 2,
                f = {
                    x: a.x + b.dx,
                    y: a.y + a.h * b.dx / a.w,
                    w: a.w - 2 * b.dx,
                    h: a.h - 2 * (a.h * b.dx / a.w)
                },
                g = f.w / 2,
                h = f.h / 2,
                i = f.x + g,
                j = f.y + h,
                k = c(i, j, g, h, 2 * Math.PI - .001, 0),
                l = a.w / 8,
                m = 1;
            l !== a.w / 2 && (m = (b.dx - l) / (a.w / 2 - l));
            for (var n = b.dx - l * m, o = a.h * n / a.w, p = a.h / a.w, q = Math.atan(p * b.dx / (a.w / 2 - b.dx)) * (1 - m), r = k.concat("Z"), s = 0; s < 8; s++) {
                var t = [a.w / 2 * Math.cos(Math.PI / 4 * s) + d, a.h / 2 * Math.sin(Math.PI / 4 * s) + e],
                    u = [(a.w - 2 * n) / 2 * Math.cos(q + Math.PI / 4 * s) + d, (a.h - 2 * o) / 2 * Math.sin(q + Math.PI / 4 * s) + e],
                    v = [(a.w - 2 * n) / 2 * Math.cos(Math.PI / 4 * s - q) + d, (a.h - 2 * o) / 2 * Math.sin(Math.PI / 4 * s - q) + e];
                r = r.concat(["M", t[0], t[1], "L", u[0], u[1], "L", v[0], v[1], "Z"])
            }
            return r
        },
        J = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 2,
                    dy: a.h / 2
                },
                e = b.dx,
                f = {
                    x: a.x,
                    y: a.y,
                    w: 2 * a.w,
                    h: a.h
                },
                g = f.w / 2,
                h = f.h / 2,
                i = f.x + g,
                j = f.y + h,
                k = {
                    x: a.x + e,
                    y: a.y,
                    w: 2 * a.w - 2 * e,
                    h: a.h
                },
                l = k.w / 2,
                m = k.h / 2,
                n = k.x + l,
                o = k.y + m,
                p = c(i, j, g, h, Math.PI / 2, -Math.PI / 2, !0, 1),
                q = d(n, o, l, m, -Math.PI / 2, Math.PI / 2, !1, 1);
            return p.concat(q)
        },
        K = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 5,
                    dy: 0
                },
                c = b.dx,
                d = [a.x, a.y],
                e = [a.x + a.w, a.y],
                f = [a.x + a.w, a.y + a.h],
                g = [a.x, a.y + a.h],
                h = [a.x + b.dx, a.y + c],
                i = [a.x + a.w - b.dx, h[1]],
                j = [i[0], a.y + a.h - c],
                k = [h[0], j[1]],
                l = ["M", d[0], d[1], "L", e[0], e[1], "L", f[0], f[1], "L", g[0], g[1], "Z", "M", h[0], h[1], "L", k[0], k[1], "L", j[0], j[1], "L", i[0], i[1], "Z"];
            return l
        },
        L = function(a) {
            var b = a.ex = a.ex || [{
                    dx: a.w / 5,
                    dy: 0
                }, {
                    dx: 0,
                    dy: a.h / 5
                }],
                c = b[0].dx,
                d = b[1].dy,
                e = [a.x, a.y],
                f = [a.x + a.w, a.y],
                g = [a.x + a.w - d * a.w / a.h, a.y + d],
                h = [a.x + c, g[1]],
                i = [h[0], a.y + a.h - c * a.h / a.w],
                j = [a.x, a.y + a.h];
            b[0].dy = 0, b[1].dx = 0;
            var k = ["M", e[0], e[1], "L", f[0], f[1], "L", g[0], g[1], "L", h[0], h[1], "L", i[0], i[1], "L", j[0], j[1], "Z"];
            return k
        },
        M = function(a) {
            var b = a.ex = a.ex || {
                    dx: 3 * a.w / 5,
                    dy: 0
                },
                c = b.dx,
                d = [a.x + c, a.y],
                e = [a.x + a.w, a.y],
                f = [a.x, a.y + a.h],
                g = [a.x, a.y + c * a.h / a.w],
                h = ["M", d[0], d[1], "L", e[0], e[1], "L", f[0], f[1], "L", g[0], g[1], "Z"];
            return h
        },
        N = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 2,
                    dy: 2 * a.h / 3
                },
                c = b.dx,
                d = b.dy,
                e = [a.x, a.y],
                f = [a.x + c, a.y],
                g = [a.x + c, a.y + d],
                h = [a.x + a.w, g[1]],
                i = [h[0], a.y + a.h],
                j = [a.x, a.y + a.h],
                k = ["M", e[0], e[1], "L", f[0], f[1], "L", g[0], g[1], "L", h[0], h[1], "L", i[0], i[1], "L", j[0], j[1], "Z"];
            return k
        },
        O = function(a) {
            var b = a.ex = a.ex || [{
                    dx: 0,
                    dy: a.h / 2
                }, {
                    dx: 3 * a.w / 4,
                    dy: a.h / 2
                }],
                f = a.w / 2,
                g = a.h / 2,
                h = a.x + f,
                i = a.y + g,
                j = e(a),
                k = j[0],
                l = j[1],
                m = 0,
                n = 0;
            b[1].dy - g === 0 ? (m = b[1].dx - f, n = a.h * (m / a.w)) : b[1].dx - f === 0 ? (n = b[1].dy - g, m = a.w * (n / a.h)) : (m = (b[1].dx - f) / Math.cos(l), n = (b[1].dy - g) / Math.sin(l));
            var o = Math.abs(l - k) >= Math.PI ? 1 : 0,
                p = c(h, i, f, g, k, l, !0, o);
            return p = p.concat(d(h, i, Math.abs(m), Math.abs(n), l, k, !1, o)), p = p.concat("Z")
        },
        P = function(a) {
            var b = a.ex = a.ex || {
                    dx: 3 * Math.min(a.w, a.h) / 4,
                    dy: a.h
                },
                c = b.dx,
                d = a.x,
                e = a.y,
                f = a.w,
                g = a.h,
                h = f - c,
                i = g / f,
                j = 2 * Math.atan(i),
                k = h * Math.cos(j),
                l = h * Math.sin(j),
                m = ["M", d + c, e + g, "L", d, e + g, "L", d, e, "L", d + f, e, "L", d + f, e + g - f + c, "L", d + c, e + g, "L", d + c + k, e + g - l, "L", d + f, e + g - f + c];
            return [m, ["M", d + c, e + g, "L", d + c + k, e + g - l, "L", d + f, e + g - f + c, "Z"]]
        },
        Q = function(a) {
            var b = a.w,
                c = a.h,
                d = a.x,
                e = a.y,
                f = a.ex = a.ex || {
                    dx: 3 * b / 4,
                    dy: c / 4
                },
                g = f.dx,
                h = f.dy,
                i = [d + g, e + h],
                j = [d + b, e],
                k = [d + b - g, e],
                l = [d, e + h],
                m = [d + g, e + c],
                n = [d, e + c],
                o = [d + b, e + c - h],
                p = ["M", j[0], j[1], "L", k[0], k[1], "L", l[0], l[1], "L", n[0], n[1], "L", m[0], m[1], "L", o[0], o[1], "Z", "L", i[0], i[1], "L", m[0], m[1], "M", l[0], l[1], "L", i[0], i[1]];
            return [p, ["M", i[0], i[1], "L", m[0], m[1], "L", o[0], o[1], "L", j[0], j[1], "Z"]]
        },
        R = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 2,
                    dy: a.h / 2
                },
                e = a.x,
                f = a.y,
                g = a.w,
                h = g / 2,
                i = b.dy / 2,
                j = e + h,
                k = f + a.h / 2,
                l = f + i,
                m = c(j, l, h, i, 0, Math.PI);
            return m = m.concat(["L", a.x, 2 * k - l]), m = m.concat(d(j, 2 * k - l, h, i, Math.PI, 0)), m = m.concat(["Z"]), m = m.concat(c(j, l, h, i, Math.PI, 0))
        },
        S = function(a) {
            var b = a.w / 2,
                d = a.h / 2,
                e = a.x + b,
                f = a.y + d,
                g = c(e, f, b, d, 2 * Math.PI - .001, 0);
            return g = g.concat("Z")
        },
        T = function(a) {
            var b = a.x,
                c = a.y,
                d = a.w,
                e = a.h,
                f = d / 2,
                g = e / 2,
                h = b + f,
                i = c + g,
                j = a.ex = a.ex || [{
                    dx: f,
                    dy: 0
                }, {
                    dx: d,
                    dy: g
                }],
                k = b + j[0].dx,
                l = c + j[0].dy,
                m = b + j[1].dx,
                n = c + j[1].dy,
                o = Math.atan2(l - i, k - h),
                p = Math.atan2(n - i, m - h),
                q = p - o,
                r = 0,
                s = [h + f * Math.cos(o), i + g * Math.sin(o)],
                t = [h + f * Math.cos(p), i + g * Math.sin(p)];
            return j[0].dx = s[0] - b, j[0].dy = s[1] - c, j[1].dx = t[0] - b, j[1].dy = t[1] - c, k = b + j[0].dx, l = c + j[0].dy, m = b + j[1].dx, n = c + j[1].dy, q < 0 && (q += 2 * Math.PI), r = q > Math.PI ? 1 : 0, a.style = a.style || 2, ["M", k, l, "A", f, g, 0, r, 1, m, n]
        },
        U = function(a) {
            var b = a.x,
                d = a.y,
                e = a.w,
                f = a.h,
                g = ["M", b, d, "L", b + e, d, "L", b + e, d + f, "L", b, d + f, "Z"];
            return g = g.concat(c(b + e / 4, d + f / 3, 11 * e / 60, f / 4, Math.PI, -Math.PI / 4, 1, 0)), g = g.concat(c(b + 9 * e / 20, d + 9 * f / 40, e / 6, f / 6, 5 * Math.PI / 4, -Math.PI / 4, 1, 0))
        };
    return {
        oval: S,
        doc: h,
        docs: j,
        triangle: n,
        cube: Q,
        can: R,
        diamond: o,
        parallelogram: p,
        ladder: q,
        lbracket: s,
        rbracket: t,
        brackets: u,
        lbrace: w,
        rbrace: x,
        braces: y,
        cross: z,
        missingcorner: A,
        lightning: B,
        pie: C,
        chord: D,
        teardrop: E,
        donut: F,
        sun: I,
        moon: J,
        frame: K,
        halframe: L,
        diagonalstripe: M,
        lshape: N,
        nosymbol: G,
        smileyface: H,
        pollygon3: function(a) {
            return m(a, 3, -Math.PI / 2)
        },
        pollygon5: function(a) {
            return m(a, 5, -Math.PI / 2)
        },
        pollygon6: function(a) {
            return m(a, 6)
        },
        pollygon7: function(a) {
            return m(a, 7, -Math.PI / 2)
        },
        pollygon8: function(a) {
            return m(a, 8)
        },
        pollygon10: function(a) {
            return m(a, 10)
        },
        pollygon12: function(a) {
            return m(a, 12)
        },
        cloud: k,
        heart: l,
        blockarc: O,
        foldedcorner: P,
        arc: T,
        cloud1: U
    }
}),
function(a, b) {
    "use strict";
    var c = null;
    if ("function" == typeof define && define.amd) define(["jh2d", "jh2d-type-rect"], b);
    else if ("undefined" != typeof module && module.exports) {
        c = require("jh2d");
        var d = require("./jh2d-type-rect");
        module.exports = b(c, d)
    } else c = a.jh2d, c.types(b(c, c.types()))
}(this, function(a, b) {
    var c = a.util,
        d = c.describeArc,
        e = c.calcOvalcallout,
        f = c.doRectEx,
        g = c.EAST,
        h = c.NORTH,
        i = c.WEST,
        j = c.SOUTH,
        k = function(a) {
            var b, c, d = [a.x, a.y],
                e = [-1, 0, 1, 0],
                k = [0, -1, 0, 1],
                l = a.w < 0 ? -1 : 1,
                m = a.h < 0 ? -1 : 1,
                n = -1,
                o = null;
            a.ex && (o = [a.x + a.ex.dx, a.y + a.ex.dy], f(a, o, function(d, e, f) {
                b = d, c = e, n = f, (n & (h | j)) === n && a.h < 0 && (n = (h | j) ^ f), n === j && (b = e, c = d), (n & (g | i)) === n && a.w < 0 && (n = (i | g) ^ f), n === i && (b = e, c = d)
            }));
            for (var p = [h, g, j, i], q = [], r = 0; r < 4; r++) {
                var s, t = [d[0] - a.w * e[r], d[1] - a.h * k[r]];
                if (a.corner) {
                    var u = [];
                    u = [d[0] + a.corner * k[r] * l, d[1] - a.corner * e[r] * m], u = u.concat(d), s = [d[0] - a.corner * e[r] * l, d[1] - a.corner * k[r] * m], u = u.concat(s), q = 0 === r ? q.concat(["M", u[0], u[1]]) : q.concat(["L", u[0], u[1]]), q = q.concat("Q").concat(u.slice(2))
                } else s = d, q = 0 === r ? q.concat(["M", s[0], s[1]]) : q.concat(["L", s[0], s[1]]);
                n === p[r] && (q = q.concat(["L", b[0], b[1], "L", o[0], o[1], "L", c[0], c[1]])), d = t
            }
            return q = q.concat("Z")
        },
        l = function(a) {
            return a.ex = a.ex || {
                dx: .1 * a.w,
                dy: a.h + .3 * a.h
            }, k(a)
        },
        m = function(a) {
            return a.corner = a.w / 6, l(a)
        },
        n = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 6,
                    dy: a.h + a.h / 6
                },
                c = b.dx,
                f = b.dy,
                g = a.w / 2,
                h = a.h / 2,
                i = a.x + g,
                j = a.y + h,
                k = e(a),
                l = k[0],
                m = k[1],
                n = d(i, j, g, h, l, m);
            return n = n.concat(["L", a.x + c, a.y + f, "Z"])
        },
        o = function(a) {
            for (var c = b.rect(a), d = a.x, e = a.y, f = a.h, g = a.ex, h = [], i = 0; i < g.length; i++) h = h.concat([0 === i ? "M" : "L", d + g[i].dx, e + g[i].dy]);
            return a.accent && (h = h.concat(["M", d + g[0].dx, e, "L", d + g[0].dx, e + f])), {
                d: c,
                dd: {
                    d: h,
                    style: 2
                }
            }
        },
        p = function(a) {
            return a.ex = a.ex || [{
                dx: -a.w / 20,
                dy: a.h / 5
            }, {
                dx: -a.w / 3,
                dy: a.h + a.h / 10
            }], o(a)
        },
        q = function(a) {
            return a.ex = a.ex || [{
                dx: -a.w / 20,
                dy: a.h / 5
            }, {
                dx: -a.w / 4,
                dy: a.h / 5
            }, {
                dx: -a.w / 3,
                dy: a.h + a.h / 10
            }], o(a)
        },
        r = function(a) {
            return a.ex = a.ex || [{
                dx: -a.w / 20,
                dy: a.h / 5
            }, {
                dx: -a.w / 4,
                dy: a.h / 5
            }, {
                dx: -a.w / 3,
                dy: a.h
            }, {
                dx: -a.w / 10,
                dy: a.h + a.h / 10
            }], o(a)
        };
    return {
        ovalcallout: n,
        rectcallout: l,
        rrectcallout: m,
        linecallout1: p,
        linecallout2: q,
        linecallout3: r
    }
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jh2d"], b) : "undefined" != typeof module && module.exports ? module.exports = b(require("jh2d")) : a.jh2d.types(b(a.jh2d))
}(this, function(a) {
    var b = a.util,
        c = b.describeArc,
        d = function(a) {
            var b = a.ex || {
                    dx: 0,
                    dy: Math.min(2 * a.h / 5, a.h / 2)
                },
                c = a.w,
                d = a.h,
                e = a.x,
                f = a.y,
                g = e + c / 10,
                h = f + d / 10,
                i = e + c / 2,
                j = f + d / 2,
                k = b.dy,
                l = k / d * c,
                m = ["M", g, f + k, "L", e + l, f + k, "L", e + l, h, "L", 2 * i - e - l, h, "L", 2 * i - e - l, f + k, "L", 2 * i - g, f + k, "L", 2 * i - g, 2 * j - f - k, "L", 2 * i - e - l, 2 * j - f - k, "L", 2 * i - e - l, 2 * j - h, "L", e + l, 2 * j - h, "L", e + l, 2 * j - f - k, "L", g, 2 * j - f - k, "Z"];
            return m
        },
        e = function(a) {
            var b = a.ex = a.ex || {
                    dx: 0,
                    dy: Math.min(2 * a.h / 5, a.h / 2)
                },
                c = a.w,
                d = a.h,
                e = a.x,
                f = a.y,
                g = e + c / 10,
                h = e + c / 2,
                i = f + d / 2,
                j = b.dy,
                k = ["M", g, f + j, "L", 2 * h - g, f + j, "L", 2 * h - g, 2 * i - f - j, "L", g, 2 * i - f - j, "Z"];
            return k
        },
        f = function(a) {
            for (var c = a.ex = a.ex || {
                    dx: 0,
                    dy: Math.min(2 * a.h / 5, a.h / 2)
                }, d = a.w, e = a.h, f = a.x, g = a.y, h = f + d / 10, i = g + e / 10, j = f + d / 2, k = g + e / 2, l = c.dy, m = l / e * d, n = ["M", h, g + l, "L", f + m, g + l, "L", f + m, i, "L", 2 * j - f - m, i, "L", 2 * j - f - m, g + l, "L", 2 * j - h, g + l, "L", 2 * j - h, 2 * k - g - l, "L", 2 * j - f - m, 2 * k - g - l, "L", 2 * j - f - m, 2 * k - i, "L", f + m, 2 * k - i, "L", f + m, 2 * k - g - l, "L", h, 2 * k - g - l, "Z"], o = Math.atan(e / d), p = 0; p < n.length - 3;) {
                var q = n[p + 1],
                    r = n[p + 2],
                    s = b.rotate([j, k], [q, r], o);
                n[p + 1] = s[0], n[p + 2] = s[1], p += 3
            }
            return n
        },
        g = function(a) {
            var b = a.w,
                d = a.h,
                e = a.x,
                f = a.y,
                g = e + b / 10,
                h = e + b / 2,
                i = f + d / 2,
                j = Math.min(2 * a.h / 5, a.h / 2),
                k = j / d * b,
                l = a.ex = a.ex || [{
                    dx: 0,
                    dy: j
                }, {
                    dx: k,
                    dy: 0
                }, {
                    dx: b,
                    dy: d / 4
                }];
            j = l[0].dy;
            var m = ["M", g, f + j, "L", 2 * h - g, f + j, "L", 2 * h - g, 2 * i - f - j, "L", g, 2 * i - f - j, "Z"],
                n = (b - 2 * l[1].dx) / 2;
            l[2].dy = Math.max(n, l[2].dy), l[2].dy = Math.min(j - n, l[2].dy);
            var o = f + l[2].dy;
            return m = m.concat(c(h, o, n, n, 2 * Math.PI - .001, 0)), m = m.concat("Z"), m = m.concat(c(h, 2 * i - o, n, n, 2 * Math.PI - .001, 0)), m = m.concat("Z")
        },
        h = function(a) {
            var b = a.w,
                c = a.h,
                d = a.x,
                e = a.y,
                f = d + b / 10,
                g = d + b / 2,
                h = e + c / 2,
                i = a.ex = a.ex || [{
                    dx: 0,
                    dy: c / 5
                }, {
                    dx: b,
                    dy: 9 * c / 20
                }],
                j = i[0].dy,
                k = i[1].dy,
                l = k - j;
            a.ex = i;
            var m = ["M", f, e + j, "L", 2 * g - f, e + j, "L", 2 * g - f, e + j + l, "L", f, e + j + l, "Z", "M", f, 2 * h - e - j, "L", 2 * g - f, 2 * h - e - j, "L", 2 * g - f, 2 * h - e - j - l, "L", f, 2 * h - e - j - l, "Z"];
            return m
        },
        i = function(a) {
            for (var c = a.w, d = a.h, e = a.x, f = a.y, g = e + c / 10, h = e + c / 2, i = f + d / 2, j = a.ex = a.ex || [{
                    dx: 0,
                    dy: d / 5
                }, {
                    dx: c,
                    dy: 9 * d / 20
                }], k = Math.min(j[0].dy, a.h / 2), l = Math.min(j[1].dy, a.h / 2), m = (l - k) / 2, n = [h - m, f, h + m, f, h + m, f + d, h - m, f + d], o = Math.PI / 9, p = 0; p < n.length - 1;) {
                var q = n[p],
                    r = n[p + 1],
                    s = b.rotate([h, i], [q, r], o);
                n[p] = s[0], n[p + 1] = s[1], p += 2
            }
            var t = b.crossPoint([n[2], n[3]], [n[4], n[5]], [e, f + k], [e + c, f + k]),
                u = b.crossPoint([n[2], n[3]], [n[4], n[5]], [e, f + l], [e + c, f + l]),
                v = b.crossPoint([n[2], n[3]], [n[4], n[5]], [e, 2 * i - f - l], [e + c, 2 * i - f - l]),
                w = b.crossPoint([n[2], n[3]], [n[4], n[5]], [e, 2 * i - f - k], [e + c, 2 * i - f - k]),
                x = b.crossPoint([n[0], n[1]], [n[6], n[7]], [e, 2 * i - f - k], [e + c, 2 * i - f - k]),
                y = b.crossPoint([n[0], n[1]], [n[6], n[7]], [e, 2 * i - f - l], [e + c, 2 * i - f - l]),
                z = b.crossPoint([n[0], n[1]], [n[6], n[7]], [e, f + l], [e + c, f + l]),
                A = b.crossPoint([n[0], n[1]], [n[6], n[7]], [e, f + k], [e + c, f + k]);
            return ["M", n[0], n[1], "L", n[2], n[3], "L", t[0], t[1], "L", e + c, f + k, "L", e + c, f + l, "L", u[0], u[1], "L", v[0], v[1], "L", 2 * h - g, 2 * i - f - l, "L", 2 * h - g, 2 * i - f - k, "L", w[0], w[1], "L", n[4], n[5], "L", n[6], n[7], "L", x[0], x[1], "L", g, 2 * i - f - k, "L", g, 2 * i - f - l, "L", y[0], y[1], "L", z[0], z[1], "L", g, f + l, "L", g, f + k, "L", A[0], A[1], "Z"]
        };
    return {
        plus: d,
        minus: e,
        multiply: f,
        division: g,
        equal: h,
        notequal: i
    }
}),
function(a, b) {
    "use strict";
    if ("function" == typeof define && define.amd) define(["jh2d", "jh2d-type-rect", "jh2d-type-basic"], b);
    else if ("undefined" != typeof module && module.exports) {
        var c = require("jh2d"),
            d = require("./jh2d-type-rect"),
            e = require("./jh2d-type-basic");
        c.types(d, e), module.exports = b(c, d, e)
    } else a.jh2d.types(b(a.jh2d, a.jh2d.types()))
}(this, function(a) {
    var b = a.util,
        c = {},
        d = Array.prototype.slice.call(arguments, 1),
        e = b.describeArc,
        f = b.describeArcL;
    if (1 === d.length) c = d[0];
    else
        for (var g = 0; g < d.length; g++) b.extend(c, d[g]);
    var h = function(a) {
            var b = a.w / 2,
                c = a.h / 2,
                d = a.x + b,
                f = a.y + c,
                g = a.w / 6,
                h = a.x + g,
                i = e(h, f, g, c, 3 * Math.PI / 2, Math.PI / 2);
            return i = i.concat(["L", 2 * d - h, a.y + a.h]).concat(e(2 * d - h, f, g, c, Math.PI / 2, 3 * Math.PI / 2)).concat(["L", h, a.y])
        },
        i = function(a) {
            var b = [a.x + a.w / 4, a.y],
                c = [b[0], a.y + a.h],
                d = a.x + a.w / 2,
                e = ["M", a.x, a.y, "L", a.x + a.w, a.y, "L", a.x + a.w, a.y + a.h, "L", a.x, a.y + a.h, "Z", "M", b[0], b[1], "L", c[0], c[1], "M", 2 * d - b[0], b[1], "L", 2 * d - c[0], c[1]];
            return e
        },
        j = function(a) {
            var b = [a.x + a.w / 4, a.y],
                c = [b[0], a.y + a.h],
                d = ["M", a.x, a.y, "L", a.x + a.w, a.y, "L", a.x + a.w, a.y + a.h, "L", a.x, a.y + a.h, "Z", "M", b[0], b[1], "L", c[0], c[1], "M", a.x, a.y + a.h / 4, "L", a.x + a.w, a.y + a.h / 4];
            return d
        },
        k = function(a) {
            var b = [a.x, a.y + a.h / 5],
                c = [a.x + a.w, a.y],
                d = [a.x + a.w, a.y + a.h],
                e = [a.x, a.y + a.h],
                f = ["M", b[0], b[1], "L", c[0], c[1], "L", d[0], d[1], "L", e[0], e[1], "Z"];
            return f
        },
        l = function(a) {
            return a.ex = a.ex || {
                dx: a.w / 4,
                dy: a.h + 10
            }, a.initRotate = 0, c.ladder(a)
        },
        m = function(a) {
            var b = [a.x, a.y],
                c = [a.x + a.w, a.y],
                d = [a.x + a.w, a.y + 4 * a.h / 5],
                e = [a.x + a.w / 2, a.y + a.h],
                f = [a.x, a.y + 4 * a.h / 5],
                g = ["M", b[0], b[1], "L", c[0], c[1], "L", d[0], d[1], "L", e[0], e[1], "L", f[0], f[1], "Z"];
            return g
        },
        n = function(a) {
            var b = [a.x, a.y + a.h / 5],
                c = [a.x + a.w / 5, a.y],
                d = [a.x + a.w, a.y],
                e = [a.x + a.w, a.y + a.h],
                f = [a.x, a.y + a.h],
                g = ["M", b[0], b[1], "L", c[0], c[1], "L", d[0], d[1], "L", e[0], e[1], "L", f[0], f[1], "Z"];
            return g
        },
        o = function(a) {
            var b = a.w / 2,
                c = a.h / 2,
                d = a.x + b,
                e = a.y + c,
                f = c / 5,
                g = a.y + f,
                h = ["M", a.x, a.y + f, "C", a.x, a.y, d, a.y, d, a.y + f, "S", a.x + a.w, 2 * g - a.y, a.x + a.w, g, "L", a.x + a.w, 2 * e - g, "C", a.x + a.w, a.y + a.h, d, a.y + a.h, d, 2 * e - g, "S", a.x, 2 * e - g - f, a.x, 2 * e - g, "Z"];
            return h
        },
        p = function(a) {
            var b = a.w / 2,
                c = a.h / 2,
                d = a.x + b,
                f = a.y + c,
                g = e(d, f, b, c, 2 * Math.PI - .001, 0),
                h = [a.w / 2 * Math.cos(Math.PI / 4) + d, a.h / 2 * Math.sin(Math.PI / 4) + f],
                i = [a.w / 2 * Math.cos(Math.PI / 4 + Math.PI) + d, a.h / 2 * Math.sin(Math.PI / 4 + Math.PI) + f];
            return g = g.concat(["Z", "M", h[0], h[1], "L", i[0], i[1], "M", h[0], 2 * f - h[1], "L", i[0], 2 * f - i[1]])
        },
        q = function(a) {
            var b = a.w / 2,
                c = a.h / 2,
                d = a.x + b,
                f = a.y + c,
                g = e(d, f, b, c, 2 * Math.PI - .001, 0);
            return g = g.concat(["Z", "M", a.x, f, "L", a.x + a.w, f, "M", d, a.y, "L", d, a.y + a.h])
        },
        r = function(a) {
            var b = [a.x, a.y],
                c = [a.x + a.w, a.y],
                d = [a.x, a.y + a.h],
                e = [a.x + a.w, a.y + a.h],
                f = ["M", b[0], b[1], "L", c[0], c[1], "L", d[0], d[1], "L", e[0], e[1], "Z"];
            return f
        },
        s = function(a) {
            var b = [a.x + a.w / 2, a.y],
                c = [a.x + a.w, a.y + a.h / 2],
                d = [a.x + a.w / 2, a.y + a.h],
                e = [a.x, a.y + a.h / 2],
                f = ["M", c[0], c[1], "L", d[0], d[1], "L", e[0], e[1], "L", b[0], b[1], "L", c[0], c[1], "L", e[0], e[1]];
            return f
        },
        t = function(a) {
            return void 0 === a.initRotate && (a.initRotate = Math.PI), c.triangle(a)
        },
        u = function(a) {
            var b = a.w / 2,
                c = a.h / 2,
                d = a.x + b,
                f = a.y + c,
                g = a.w / 6,
                h = a.x + g,
                i = e(h, f, g, c, 3 * Math.PI / 2, Math.PI / 2);
            return i = i.concat(["L", 2 * d - h, a.y + a.h]).concat(e(2 * d - h, f, g, c, Math.PI / 2, 3 * Math.PI / 2, !0)).concat(["L", h, a.y])
        },
        v = function(a) {
            var b = a.w / 2,
                c = a.h / 2,
                d = a.x + b,
                e = a.y + c,
                g = a.w / 2,
                h = a.x + g,
                i = ["M", a.x, a.y, "L", a.x, a.y + a.h];
            return i = i.concat(["L", 2 * d - h, a.y + a.h]).concat(f(2 * d - h, e, g, c, Math.PI / 2, 3 * Math.PI / 2)).concat("Z")
        },
        w = function(a) {
            var b = a.w / 2,
                c = a.h / 2,
                d = a.x + b,
                f = a.y + c,
                g = e(d, f, b, c, Math.PI / 4, Math.PI / 2);
            return g = g.concat(["L", a.x + a.w, a.y + a.h, "L", a.x + a.w, g[2], "Z"])
        },
        x = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 2,
                    dy: a.h / 2
                },
                c = a.h / 2,
                d = b.dx / 2,
                g = a.y + c,
                h = a.x + a.w / 2,
                i = a.x + d,
                j = e(i, g, d, c, -Math.PI / 2, Math.PI / 2);
            return j = j.concat(["L", 2 * h - i, a.y + a.h]), j = j.concat(f(2 * h - i, g, d, c, Math.PI / 2, -Math.PI / 2)), j = j.concat(["L", i, a.y]), j = j.concat(e(i, g, d, c, Math.PI / 2, -Math.PI / 2))
        },
        y = function(a) {
            var b = a.w / 2,
                c = a.h / 2,
                d = a.x + b,
                e = a.y + c,
                g = a.w / 6,
                h = a.x + g,
                i = ["M", a.x + a.w / 6, a.y, "L", a.x, e, "L", a.x + a.w / 6, a.y + a.h];
            return i = i.concat(f(2 * d - h, e, g, c, Math.PI / 2, 3 * Math.PI / 2)).concat("Z")
        };
    return {
        process: c.rect,
        altproc: c.rrect,
        decision: c.diamond,
        data: c.parallelogram,
        preparation: c.pollygon6,
        connector: c.oval,
        extract: c.triangle,
        magstorage: c.can,
        terminator: h,
        predefproc: i,
        interstorage: j,
        manualinput: k,
        manualoper: l,
        offpageconn: m,
        card: n,
        punchedtape: o,
        summingjunction: p,
        or: q,
        collate: r,
        sort: s,
        merge: t,
        storeddata: u,
        delay: v,
        seqstorage: w,
        directstorage: x,
        display: y
    }
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jh2d"], b) : "undefined" != typeof module && module.exports ? module.exports = b(require("jh2d")) : a.jh2d.types(b(a.jh2d))
}(this, function(a) {
    var b = a.util,
        c = function(a) {
            var b = a.ex,
                c = b && b.length;
            if (c > 1) {
                var e = [a.x + b[0].dx, a.y + b[0].dy],
                    f = [a.x + b[1].dx, a.y + b[1].dy],
                    g = ["M", e[0], e[1]];
                if (c > 2) {
                    for (var h = null, i = null, j = 0; j < c; j++) {
                        var k = [a.x + b[j].dx, a.y + b[j].dy],
                            l = [a.x + b[(j + 1) % c].dx, a.y + b[(j + 1) % c].dy],
                            m = [a.x + b[(j + 2) % c].dx, a.y + b[(j + 2) % c].dy],
                            n = d(k, l, m);
                        if (0 === j ? (g = a.closed ? ["M"].concat(l) : g.concat(["Q"]).concat(n[0]).concat(l), h = n) : g = g.concat(["C"]).concat(i[1]).concat(n[0]).concat(l), i = n, !a.closed && j === c - 3) {
                            g = g.concat(["Q"]).concat(n[1]).concat(m);
                            break
                        }
                    }
                    a.closed && (g = g.concat(["C"]).concat(i[1]).concat(h[0]).concat(f), g.push("Z"))
                } else g = g.concat(["L"]).concat(f);
                return g
            }
        },
        d = function(a, c, d) {
            var e = 0,
                f = 0,
                g = Math.PI / 2,
                h = Math.PI / 2;
            c[0] - a[0] !== 0 ? (e = (c[1] - a[1]) / (c[0] - a[0]), g = Math.atan(e), a[0] - c[0] > 0 ? e < 0 && (g += 2 * Math.PI) : g += Math.PI) : a[1] < c[1] && (g += Math.PI), c[0] - d[0] !== 0 ? (f = (d[1] - c[1]) / (d[0] - c[0]), h = Math.atan(f), d[0] - c[0] > 0 ? f < 0 && (h += 2 * Math.PI) : h += Math.PI) : d[1] < c[1] && (h += Math.PI);
            var i = h + (g - h) / 2,
                j = b.rotate([c[0], c[1]], a, Math.PI / 2 - i),
                k = b.rotate([c[0], c[1]], d, Math.PI / 2 - i),
                l = [j[0] - (j[0] - c[0]) / 2, c[1]],
                m = [k[0] - (k[0] - c[0]) / 2, c[1]];
            return [b.rotate([c[0], c[1]], l, Math.PI / 2 - i, -1), b.rotate([c[0], c[1]], m, Math.PI / 2 - i, -1)]
        },
        e = function(a) {
            var b = [];
            if (a.ex && a.ex.length > 1) {
                for (var c = 0; c < a.ex.length; c++) {
                    var d = a.ex[c];
                    b = b.concat([0 === c ? "M" : "L", a.x + d.dx, a.y + d.dy])
                }
                a.closed && b.push("Z")
            }
            return b
        },
        f = function(a) {
            var c = a.x,
                d = a.y,
                e = a.w,
                f = a.h,
                g = a.ex || [],
                h = ["M", c, d];
            b.isArray(g) || (g = [g]);
            for (var i = 0; i < g.length; i++) {
                var j = g[i];
                h = h.concat(["L", c + j.dx, d + j.dy])
            }
            return h = h.concat(["L", c + e, d + f])
        },
        g = function(a) {
            var b = a.x,
                c = a.y,
                d = a.w,
                e = a.h;
            return ["M", b, c, "L", b + d, c + e, "M", b + d, c, "L", b, c + e]
        },
        h = function(a) {
            var b = a.ex = a.ex || {
                dx: 3 * a.w / 4,
                dy: a.h / 4
            };
            return ["M", a.x, a.y, "q", b.dx, b.dy, a.w, a.h]
        },
        i = function(a) {
            var b = a.ex = a.ex || [{
                dx: a.w,
                dy: 0
            }, {
                dx: 0,
                dy: a.h
            }];
            return ["M", a.x, a.y, "c", b[0].dx, b[0].dy, b[1].dx, b[1].dy, a.w, a.h]
        };
    return {
        line: f,
        linex: h,
        linexx: i,
        freeform: e,
        curve: c,
        x: g
    }
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jh2d"], b) : "undefined" != typeof module && module.exports ? module.exports = b(require("jh2d")) : a.jh2d.types(b(a.jh2d))
}(this, function() {
    var a = function(a, b) {
            var c = a.ex = a.ex || {
                    dx: 5 * a.w / 6,
                    dy: 0
                },
                d = c.dx,
                e = d / a.w,
                f = a.h * (1 - e),
                g = ["M", a.x, a.y],
                h = ["L", a.x + d, a.y],
                i = ["Q", a.x + a.w, a.y],
                j = [a.x + a.w, a.y + f],
                k = ["L", a.x + a.w, a.y + a.h],
                l = ["L", a.x, a.y + a.h],
                m = g.concat(h);
            return m = b ? m.concat("L").concat(j) : m.concat(i).concat(j), m = m.concat(k).concat(l).concat("z")
        },
        b = function(b) {
            return a(b, !1)
        },
        c = function(b) {
            return a(b, !0)
        },
        d = function(a) {
            var b = a.ex = a.ex || {
                    dx: a.w / 6,
                    dy: 0
                },
                c = b.dx,
                d = c / a.w,
                e = a.h * d,
                f = a.x + a.w / 2,
                g = a.y + a.h / 2,
                h = [a.x, a.y + e],
                i = [a.x + c, a.y],
                j = ["Q", a.x, a.y],
                k = ["L", 2 * f - i[0], i[1]],
                l = ["Q", a.x + a.w, a.y],
                m = [2 * f - h[0], h[1]],
                n = ["L", 2 * f - h[0], 2 * g - h[1]],
                o = ["Q", a.x + a.w, a.y + a.h],
                p = [2 * f - i[0], 2 * g - i[1]],
                q = ["L", i[0], 2 * g - i[1]],
                r = ["Q", a.x, a.y + a.h],
                s = [h[0], 2 * g - h[1]],
                t = ["M"].concat(h).concat(j).concat(i).concat(k).concat(l).concat(m).concat(n).concat(o).concat(p).concat(q).concat(r).concat(s).concat("Z");
            return t
        },
        e = function(a) {
            return ["M", a.x, a.y, "l", a.w, 0, "l", 0, a.h, "l", -a.w, 0, "z"]
        },
        f = function(a, b) {
            var c = a.ex = a.ex || [{
                    dx: 5 * a.w / 6,
                    dy: 0
                }, {
                    dx: 0,
                    dy: a.h
                }],
                d = c[0],
                e = c[1],
                f = d.dx,
                g = e.dx,
                h = f / a.w,
                i = g / a.w,
                j = a.h * (1 - h),
                k = a.h * (1 - i),
                l = a.x + a.w / 2,
                m = [a.x + f, a.y],
                n = ["Q", a.x + a.w, a.y],
                o = [a.x + a.w, a.y + j],
                p = ["M", 2 * l - o[0], o[1]],
                q = ["Q", a.x, a.y],
                r = [2 * l - m[0], m[1]],
                s = [a.x + g, a.y + a.h],
                t = ["Q", a.x, s[1]],
                u = [a.x, a.y + k],
                v = ["L", 2 * l - u[0], u[1]],
                w = ["Q", a.x + a.w, a.y + a.h],
                x = [2 * l - s[0], s[1]],
                y = p;
            return y = b ? y.concat("L").concat(r) : y.concat(q).concat(r), y = y.concat("L").concat(m), y = b ? y.concat("L").concat(o) : y.concat(n).concat(o), y = y.concat(v), y = b ? y.concat("L").concat(x) : y.concat(w).concat(x), y = y.concat("L").concat(s), y = b ? y.concat("L").concat(u) : y.concat(t).concat(u), y.concat("Z")
        },
        g = function(a) {
            return f(a, !0)
        },
        h = function(a) {
            return f(a, !1)
        },
        i = function(a, b) {
            var c = a.ex = a.ex || [{
                    dx: a.w / 6,
                    dy: 0
                }, {
                    dx: a.w,
                    dy: 0
                }],
                d = c[0].dx,
                e = c[1].dx,
                f = d / a.w,
                g = e / a.w,
                h = a.h * f,
                i = a.h * (1 - g),
                j = a.x + a.w / 2,
                k = a.y + a.h / 2,
                l = [a.x, a.y + h],
                m = [a.x + d, a.y],
                n = [a.x, a.y],
                o = [a.x + e, a.y],
                p = [a.x + a.w, a.y + i],
                q = [a.x + a.w, a.y],
                r = [a.x + a.w, 2 * k - l[1]],
                s = [2 * j - m[0], a.y + a.h],
                t = [a.x + a.w, a.y + a.h],
                u = [2 * j - o[0], a.y + a.h],
                v = [a.x, 2 * k - p[1]],
                w = [a.x, a.y + a.h],
                x = ["M"].concat(l);
            return x = b ? x.concat("L", m) : x.concat("Q", n, m), x = x.concat("L", o), x = b ? x.concat("L", p) : x.concat("Q", q, p), x = x.concat("L", r), x = b ? x.concat("L", s) : x.concat("Q", t, s), x = x.concat("L", u), x = b ? x.concat("L", v, "Z") : x.concat("Q", w, v, "Z")
        },
        j = function(a) {
            return i(a, !0)
        },
        k = function(a) {
            return i(a, !1)
        },
        l = function(a) {
            var b = a.ex = a.ex || [{
                    dx: a.w / 6,
                    dy: 0
                }, {
                    dx: 5 * a.w / 6,
                    dy: 0
                }],
                c = b[0].dx,
                d = b[1].dx,
                e = c / a.w,
                f = d / a.w,
                g = a.h * e,
                h = a.h * (1 - f),
                i = ["M", a.x, a.y + g],
                j = [a.x + c, a.y],
                k = ["Q", a.x, a.y],
                l = ["L", a.x + d, a.y],
                m = ["L", a.x + a.w, a.y + h],
                n = ["L", a.x + a.w, a.y + a.h],
                o = ["L", a.x, a.y + a.h, "Z"];
            return i.concat(k, j, l, m, n, o)
        };
    return {
        rect: e,
        rrect: d,
        srrect: b,
        ssrect: c,
        sssrect: g,
        ssrrect: h,
        dsrect: j,
        drrect: k,
        sasrrect: l
    }
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jh2d"], b) : "undefined" != typeof module && module.exports ? module.exports = b(require("jh2d")) : a.jh2d.types(b(a.jh2d))
}(this, function(a) {
    var b = a.util,
        c = function(a) {
            for (var b = [
                    [a.x, a.y + a.h / 12],
                    [a.x + 1 * a.w / 3, a.y + a.h / 4],
                    [a.x + 4 * a.w / 10, a.y + a.h / 10],
                    [a.x + a.w / 2, a.y + a.h / 4],
                    [a.x + 2 * a.w / 3, a.y],
                    [a.x + 2 * a.w / 3, a.y + a.h / 4],
                    [a.x + 5 * a.w / 6, a.y + a.h / 5],
                    [a.x + 3 * a.w / 4, a.y + a.h / 3],
                    [a.x + a.w, a.y + 3 * a.h / 8],
                    [a.x + 5 * a.w / 6, a.y + a.h / 2],
                    [a.x + a.w, a.y + 5 * a.h / 8],
                    [a.x + 3 * a.w / 4, a.y + 5 * a.h / 8],
                    [a.x + 5 * a.w / 6, a.y + 5 * a.h / 6],
                    [a.x + 5 * a.w / 8, a.y + 3 * a.h / 4],
                    [a.x + 6 * a.w / 10, a.y + 9 * a.h / 10],
                    [a.x + a.w / 2, a.y + 3 * a.h / 4],
                    [a.x + 3 * a.w / 8, a.y + a.h],
                    [a.x + a.w / 3, a.y + 9 * a.h / 12],
                    [a.x + a.w / 5, a.y + 10 * a.h / 12],
                    [a.x + a.w / 4, a.y + 8 * a.h / 12],
                    [a.x, a.y + 8 * a.h / 12],
                    [a.x + a.w / 5, a.y + 6 * a.h / 12],
                    [a.x, a.y + 5 * a.h / 12],
                    [a.x + a.w / 4, a.y + 4 * a.h / 12]
                ], c = [], d = 0; d < b.length; d++) {
                var e = b[d];
                c = c.concat([0 === d ? "M" : "L", e[0], e[1]])
            }
            return c.concat("Z")
        },
        d = function(a, c, d) {
            for (var e = b.star(a, c, d), f = ["M", e[0][0], e[0][1]], g = 1; g < e.length; g++) f = f.concat(["L", e[g][0], e[g][1]]);
            return f.concat("Z")
        },
        e = function(a) {
            var b = a.ex || [{
                    dx: a.w / 2,
                    dy: a.h + 10
                }, {
                    dx: -10,
                    dy: a.h / 4
                }],
                c = b[0].dx,
                d = b[1].dy,
                e = a.y + a.h / 2,
                f = c - a.w / 2,
                g = 2 * Math.abs(f),
                h = a.w - g,
                i = [f < 0 ? a.x + g : a.x, a.y + d],
                j = [i[0] + h / 2, a.y],
                k = [j[0], 2 * i[1] - j[1]],
                l = [i[0] + h, i[1]],
                m = [f < 0 ? a.x + a.w - g : a.x + a.w, 2 * e - i[1]],
                n = [m[0] - h / 2, a.y + a.h],
                o = [n[0], 2 * e - k[1]],
                p = [m[0] - h, 2 * e - i[1]],
                q = ["M", i[0], i[1], "C", j[0], j[1], k[0], k[1], l[0], l[1], "L", m[0], m[1], "C", n[0], n[1], o[0], o[1], p[0], p[1], "Z"];
            return q
        },
        f = function(a) {
            var b = a.ex = a.ex || [{
                    dx: a.w / 2,
                    dy: a.h + 10
                }, {
                    dx: -10,
                    dy: a.h / 4
                }],
                c = b[0].dx,
                d = b[1].dy,
                e = a.y + a.h / 2,
                f = c - a.w / 2,
                g = 2 * Math.abs(f),
                h = a.w - g,
                i = [f < 0 ? a.x + g : a.x, a.y + d],
                j = [i[0] + h / 4, a.y],
                k = [j[0], 2 * i[1] - j[1]],
                l = [i[0] + h / 2, i[1]],
                m = [i[0] + 3 * h / 4, a.y],
                n = [m[0], 2 * i[1] - j[1]],
                o = [i[0] + h, i[1]],
                p = [f < 0 ? a.x + a.w - g : a.x + a.w, 2 * e - i[1]],
                q = [p[0] - h / 4, a.y + a.h],
                r = [q[0], 2 * e - n[1]],
                s = [p[0] - h / 2, p[1]],
                t = [p[0] - 3 * h / 4, a.y + a.h],
                u = [t[0], 2 * e - k[1]],
                v = [p[0] - h, 2 * e - i[1]],
                w = ["M", i[0], i[1], "C", j[0], j[1], k[0], k[1], l[0], l[1], "C", m[0], m[1], n[0], n[1], o[0], o[1], "L", p[0], p[1], "C", q[0], q[1], r[0], r[1], s[0], s[1], "C", t[0], t[1], u[0], u[1], v[0], v[1], "Z"];
            return w
        },
        g = function(a) {
            var b = a.ex = a.ex || {
                    dx: 0,
                    dy: Math.min(a.w, a.h) / 4
                },
                c = b.dy,
                d = [a.x + 2 * c, a.y + c / 2],
                e = [a.x + 3 * c / 2, d[1]],
                f = [e[0] - c / 4, e[1]],
                g = [f[0], e[1] + c / 2],
                i = [e[0], g[1]],
                j = [d[0], i[1]],
                k = [d[0], a.y],
                l = [e[0], a.y],
                m = [a.x + c, a.y],
                n = [m[0], a.y + c / 2],
                o = [m[0], a.y + a.h - c / 2],
                p = [o[0], a.y + a.h],
                q = [a.x, a.y + a.h - c],
                r = [a.x + c / 2, q[1]],
                s = [a.x + 3 * c / 4, r[1]],
                t = [s[0], o[1]],
                u = [r[0], t[1]],
                v = [a.x + c / 2, a.y + a.h],
                w = [a.x + a.w - 3 * c / 2, a.y + a.h],
                x = [a.x + a.w - c, a.y + a.h],
                y = [x[0], a.y + a.h - c / 2],
                z = [y[0], i[1]],
                A = [z[0] + c / 2, z[1]],
                B = [a.x + a.w, A[1]],
                C = [a.x + a.w, a.y],
                D = [a.x + a.w - c / 2, a.y],
                E = ["M", l[0], l[1], "Q", m[0], m[1], n[0], n[1], "L", o[0], o[1], "Q", p[0], p[1], v[0], v[1], "L", w[0], w[1], "Q", x[0], x[1], y[0], y[1], "L", z[0], z[1], "L", A[0], A[1], "C", B[0], B[1], C[0], C[1], D[0], D[1], "L", l[0], l[1], "Q", k[0], k[1], d[0], d[1], "Q", j[0], j[1], i[0], i[1], "L", z[0], z[1], "M", o[0], o[1], "L", u[0], u[1], "C", t[0], t[1], s[0], s[1], r[0], r[1], "L", o[0], r[1]],
                F = h(a);
            return [E.concat(F), F]
        },
        h = function(a) {
            var b = a.ex.dy,
                c = [a.x + 2 * b, a.y + b / 2],
                d = [a.x + 3 * b / 2, c[1]],
                e = [d[0] - b / 4, d[1]],
                f = [e[0], d[1] + b / 2],
                g = [d[0], f[1]],
                h = [c[0], g[1]],
                i = [a.x + b, a.y + a.h - b / 2],
                j = [i[0], a.y + a.h],
                k = [a.x, a.y + a.h - b],
                l = [a.x + b / 2, k[1]],
                m = [a.x + 3 * b / 4, l[1]],
                n = [m[0], i[1]],
                o = [l[0], n[1]],
                p = [a.x + b / 2, a.y + a.h],
                q = ["M", i[0], i[1], "Q", j[0], j[1], p[0], p[1], "C", k[0], p[1], k[0], k[1], l[0], l[1], "C", m[0], m[1], n[0], n[1], o[0], o[1], "L", i[0], i[1], "M", c[0], c[1], "L", d[0], d[1], "C", e[0], e[1], f[0], f[1], g[0], g[1], "Q", h[0], h[1], c[0], c[1]];
            return q
        },
        i = function(a) {
            a.ex = a.ex || {
                dx: Math.min(a.w, a.h) / 4,
                dy: 0
            };
            var b = a.x,
                c = a.y,
                d = a.w,
                e = a.h,
                f = a.ex.dx,
                g = [b + f / 2, c + 2 * f],
                h = [g[0], c + 3 * f / 2],
                i = [h[0], h[1] - f / 4],
                k = [h[0] + f / 2, i[1]],
                l = [k[0], h[1]],
                m = [l[0], g[1]],
                n = [b, g[1]],
                o = [b, h[1]],
                p = [b, c + f],
                q = [b + f / 2, p[1]],
                r = [b + d - f / 2, p[1]],
                s = [b + d, r[1]],
                t = [b + d - f, c],
                u = [t[0], c + f / 2],
                v = [u[0], c + 3 * f / 4],
                w = [r[0], v[1]],
                x = [w[0], u[1]],
                y = [b + d, c + f / 2],
                z = [b + d, c + e - 3 * f / 2],
                A = [b + d, c + e - f],
                B = [b + d - f / 2, A[1]],
                C = [l[0], B[1]],
                D = [C[0], C[1] + f / 2],
                E = [D[0], c + e],
                F = [b, c + e],
                G = [b, c + e - f / 2],
                H = ["M", o[0], o[1], "Q", p[0], p[1], q[0], q[1], "L", r[0], r[1], "Q", s[0], s[1], y[0], y[1], "L", z[0], z[1], "Q", A[0], A[1], B[0], B[1], "L", C[0], C[1], "L", D[0], D[1], "C", E[0], E[1], F[0], F[1], G[0], G[1], "L", o[0], o[1], "Q", n[0], n[1], g[0], g[1], "Q", m[0], m[1], l[0], l[1], "L", C[0], C[1], "M", r[0], r[1], "L", x[0], x[1], "C", w[0], w[1], v[0], v[1], u[0], u[1], "L", u[0], r[1]],
                I = j(a);
            return [H.concat(I), I]
        },
        j = function(a) {
            var b = a.x,
                c = a.y,
                d = a.w,
                e = a.ex.dx,
                f = [b + e / 2, c + 2 * e],
                g = [f[0], c + 3 * e / 2],
                h = [g[0], g[1] - e / 4],
                i = [g[0] + e / 2, h[1]],
                j = [i[0], g[1]],
                k = [j[0], f[1]],
                l = [b + d - e / 2, c + e],
                m = [b + d, l[1]],
                n = [b + d - e, c],
                o = [n[0], c + e / 2],
                p = [o[0], c + 3 * e / 4],
                q = [l[0], p[1]],
                r = [q[0], o[1]],
                s = [b + d, c + e / 2],
                t = ["M", l[0], l[1], "Q", m[0], m[1], s[0], s[1], "C", s[0], n[1], n[0], n[1], o[0], o[1], "C", p[0], p[1], q[0], q[1], r[0], r[1], "L", l[0], l[1], "M", f[0], f[1], "L", g[0], g[1], "C", h[0], h[1], i[0], i[1], j[0], j[1], "Q", k[0], k[1], f[0], f[1]];
            return t
        },
        k = function(a) {
            a.ex = a.ex || [{
                dx: a.w / 4,
                dy: -10
            }, {
                dx: a.w / 2,
                dy: 3 * a.h / 4
            }];
            var b = a.x,
                c = a.y,
                d = a.w,
                e = a.h,
                f = a.ex[0].dx,
                g = a.ex[1].dy,
                h = b + d / 2,
                i = (e - g) / 4,
                j = [b + f + d / 8, c + g + 3 * i],
                k = [2 * h - j[0], j[1]],
                m = [j[0], c + e],
                n = [j[0] - i, m[1]],
                o = [b, m[1]],
                p = [b + d / 8, c + e - g / 2],
                q = [b, c + e - g],
                r = [b + f, q[1]],
                s = [r[0], c + i],
                t = [r[0], c],
                u = [r[0] + i, c],
                v = [2 * h - u[0], c],
                w = [2 * h - t[0], c],
                x = [2 * h - s[0], s[1]],
                y = [2 * h - r[0], r[1]],
                z = [2 * h - q[0], q[1]],
                A = [2 * h - p[0], p[1]],
                B = [2 * h - o[0], o[1]],
                C = [2 * h - n[0], n[1]],
                D = [2 * h - m[0], m[1]],
                E = [b + f, c + g + i],
                F = [2 * h - E[0], E[1]],
                G = [k[0], c + g],
                H = [2 * h - k[0], c + g],
                I = ["M", j[0], j[1], "Q", m[0], m[1], n[0], n[1], "L", o[0], o[1], "L", p[0], p[1], "L", q[0], q[1], "L", r[0], r[1], "L", s[0], s[1], "Q", t[0], t[1], u[0], u[1], "L", v[0], v[1], "Q", w[0], w[1], x[0], x[1], "L", y[0], y[1], "L", z[0], z[1], "L", A[0], A[1], "L", B[0], B[1], "L", C[0], C[1], "Q", D[0], D[1], k[0], k[1], "L", G[0], G[1], "L", H[0], H[1], "M", E[0], E[1], "L", s[0], s[1], "M", F[0], F[1], "L", x[0], x[1]],
                J = l(a);
            return I = J.concat(I), [I, J]
        },
        l = function(a) {
            var b = a.ex[0].dx,
                c = a.ex[1].dy,
                d = a.x + a.w / 2,
                e = [a.x + b + a.w / 8, a.y + c],
                f = (a.h - c) / 4,
                g = [a.x + b + f, e[1]],
                h = [a.x + b, e[1]],
                i = [a.x + b, e[1] + f],
                j = [a.x + b, e[1] + 2 * f],
                k = [a.x + b + f, e[1] + 2 * f],
                l = [e[0] - f, k[1]],
                m = [e[0], k[1]],
                n = [e[0], k[1] + f],
                o = [2 * d - e[0], e[1]],
                p = [2 * d - g[0], g[1]],
                q = [2 * d - h[0], h[1]],
                r = [2 * d - i[0], i[1]],
                s = [2 * d - j[0], j[1]],
                t = [2 * d - k[0], k[1]],
                u = [2 * d - l[0], l[1]],
                v = [2 * d - m[0], m[1]],
                w = [2 * d - n[0], n[1]],
                x = ["M", e[0], e[1], "L", g[0], g[1], "Q", h[0], h[1], i[0], i[1], "Q", j[0], j[1], k[0], k[1], "L", l[0], l[1], "Q", m[0], m[1], n[0], n[1], "L", e[0], e[1], "L", o[0], o[1], "L", p[0], p[1], "Q", q[0], q[1], r[0], r[1], "Q", s[0], s[1], t[0], t[1], "L", u[0], u[1], "Q", v[0], v[1], w[0], w[1], "L", o[0], o[1]];
            return x
        },
        m = function(a) {
            return a.initRotate = Math.PI, k(a)
        },
        n = function(a) {
            var c = a.ex = a.ex || [{
                    dx: 0,
                    dy: a.h / 4
                }, {
                    dx: a.w / 4,
                    dy: 0
                }, {
                    dx: a.w / 2,
                    dy: 3 * a.h / 5
                }],
                d = a.x,
                e = a.y,
                f = a.w,
                g = a.h,
                h = f / 2,
                i = d + h,
                j = g * (1 - 3 * c[2].dy / (2 * g));
            c[2].dy > 2 * g / 3 && (j = c[2].dy >= g ? 0 : c[2].dy > g - c[0].dy ? g - c[2].dy : c[0].dy), c[0].dy = j;
            var k = d,
                l = e + j,
                m = d + f,
                n = l,
                o = i,
                p = e - j,
                q = b.bezier([k, l, o, p, m, n], c[1].dx / f),
                r = b.bezier([k, l, d + f / 4, e, i, e], 2 * (c[1].dx + f / 8) / f),
                s = b.bezier([k, l, o, p, m, n], 1 / 8),
                t = ["M", q[0], q[1], "Q", o, 2 * e - q[1], 2 * i - q[0], q[1], "L", 2 * i - q[0], q[1] + c[2].dy, "Q", o, 2 * e - q[1] + c[2].dy, q[0], q[1] + c[2].dy, "Z", "M", r[0], r[1] + c[2].dy, "L", r[0], r[1] + (g - j), "L", q[0], q[1] + c[2].dy, "M", r[0], r[1] + (g - j), "Q", d + f / 4, e + (g - j), d, e + g, "L", s[0], s[1] + c[2].dy, "L", d, e + g - c[2].dy, "Q", d + f / 4, e + (g - j) - c[2].dy, q[0], q[1] + g - j - c[2].dy, "M", 2 * i - q[0], q[1] + g - j - c[2].dy, "Q", d + 3 * f / 4, e + (g - j) - c[2].dy, d + f, e + g - c[2].dy, "L", 2 * i - s[0], s[1] + c[2].dy, "L", d + f, e + g, "Q", d + 3 * f / 4, e + (g - j), 2 * i - r[0], r[1] + (g - j), "L", 2 * i - r[0], r[1] + c[2].dy, "M", 2 * i - r[0], r[1] + (g - j), "L", 2 * i - q[0], q[1] + c[2].dy];
            return [t, ["M", r[0], r[1] + c[2].dy, "L", r[0], r[1] + (g - j), "L", q[0], q[1] + c[2].dy, "Q", o, 2 * e - q[1] + c[2].dy, 2 * i - q[0], q[1] + c[2].dy, "L", 2 * i - r[0], r[1] + (g - j), "L", 2 * i - r[0], r[1] + c[2].dy]]
        },
        o = function(a) {
            return a.initRotate = Math.PI, n(a)
        };
    return {
        explosion: c,
        star3: function(a) {
            return d(a, 3, -Math.PI / 2)
        },
        star4: function(a) {
            return d(a, 4)
        },
        star5: function(a) {
            return d(a, 5, -Math.PI / 2)
        },
        star6: function(a) {
            return d(a, 6, -Math.PI / 2)
        },
        star7: function(a) {
            return d(a, 7, -Math.PI / 2)
        },
        star8: function(a) {
            return d(a, 8)
        },
        star10: function(a) {
            return d(a, 10)
        },
        star12: function(a) {
            return d(a, 12)
        },
        star16: function(a) {
            return d(a, 16)
        },
        star24: function(a) {
            return d(a, 24)
        },
        star32: function(a) {
            return d(a, 32)
        },
        wave: e,
        wave2: f,
        vscroll: g,
        hscroll: i,
        uribbon: k,
        dribbon: m,
        curveduribbon: n,
        curveddribbon: o
    }
}); /*! jh2d 2016-09-01 */
! function(a, b) {
    "use strict";
    if ("function" == typeof define && define.amd) define(["jh2d"], b);
    else if ("undefined" != typeof module && module.exports) module.exports = b(require("jh2d"));
    else {
        var c = a.jh2d = a.jh2d || {};
        c.event = b(c)
    }
}(this, function(a) {
    function b(a, b) {
        var d = a.text,
            e = b.text;
        e && ("object" == typeof b.text ? ("string" == typeof d && (d = {
            text: d
        }), "object" == typeof d && c.extend(b.text, d)) : "string" == typeof b.text && "object" == typeof d && (b.text = c.extend({
            text: b.text
        }, d))), c.extend(a, b, !0), (b.x || b.w || b.y || b.h) && delete a.d, b.text = e
    }
    var c = a.util,
        d = function(a, b) {
            return b.id || "_jh_" + b.type + "_" + a.seq++
        },
        e = function(a) {
            a.o = c.extend(a.o || {}, {
                seq: 0
            }), this._c = new h(this, a.c), this._g = g(this), this.data(a), this._s = new j(this, a.s)
        };
    e.prototype = {
        gen: function(a) {
            var b = this._m;
            return a.id = d(b, a), a
        },
        add: function(a) {
            var b = this,
                d = b._d;
            c.isArray(a) ? c.each(a, function(a) {
                d[d.length] = b.gen(a)
            }) : a && (d[d.length] = this.gen(a))
        },
        get: function(a) {
            return c.getArray(this._d, a)
        },
        data: function(a) {
            var b = this;
            return "undefined" == typeof a ? {
                d: this._d,
                o: this._m,
                g: this._g.data()
            } : (this._m = a.o, this._d = a.d || [], c.each(this._d, function(a) {
                a.id || b.gen(a)
            }), a.g && this._g.data(a.g), void 0)
        },
        id: function(a) {
            var b = this.indexById(a);
            return this.get(b)
        },
        update: function(a, b) {
            var d = this._d,
                e = this;
            c.each(a, function(a) {
                var f = e.indexById(a.id);
                f !== -1 && ("function" == typeof b && b(a, d[f]), c.extend(d[f], a, !0), delete d[f].d)
            })
        },
        indexOf: function(a, b) {
            var d = this._d,
                e = -1;
            return c.each(d, function(d, f) {
                if ("function" == typeof b && b(d)) return !1;
                if (!d.locked) {
                    var g = c.spRotate(d, a, -1, !0),
                        h = d.d,
                        i = !1;
                    return h && (c.isArray(h) ? (c.isArray(h[0]) && (h = h[0]), ("line" === d.type || c.inRect(d, g) || d.ex) && (i = 0 !== c.evalSVGPath(h, g))) : i = c.inRect(d, g)), i && (e = f), i
                }
            }, !0), e
        },
        indexsOf: function(a, b) {
            var d = this,
                e = d._d,
                f = d._g,
                g = [],
                h = c.maxRect(a, b),
                i = {};
            return c.each(e, function(a, b) {
                if (!a.locked)
                    if (a.grpId) {
                        var e = f.indexById(a.grpId);
                        if (e !== -1 && !i[a.grpId]) {
                            var j = f.get(e);
                            i[j.id] = !0, c.insideRect(h, j._g) && c.each(j.childIds(), function(a) {
                                g[g.length] = d.indexById(a)
                            })
                        }
                    } else c.insideRect(h, a) && (g[g.length] = b)
            }), g
        },
        indexById: function(a) {
            var b = this._d,
                d = -1;
            return c.each(b, function(b, c) {
                var e = b.id === a;
                return e && (d = c), e
            }), d
        },
        arrange: function(a, b) {
            var d = this,
                e = d._d,
                f = d._g;
            switch (c.each(a, function(a) {
                var g = d.indexById(a.id);
                switch (b) {
                    case 3:
                        g < e.length - 1 && c.arrExch(e, g, g + 1);
                        break;
                    case 4:
                        g > 0 && c.arrExch(e, g - 1, g);
                        break;
                    case 0:
                        a.grpId && f.removeById(a.grpId), e.splice(g, 1);
                        break;
                    case 1:
                    case 2:
                        e.splice(g, 1)
                }
            }), b) {
                case 1:
                    this._d = e.concat(a);
                    break;
                case 2:
                    this._d = a.concat(e)
            }
            return this
        },
        remove: function(a) {
            return this.arrange(a, 0)
        },
        arrangeFirst: function(a) {
            return this.arrange(a, 2)
        },
        arrangeLast: function(a) {
            return this.arrange(a, 1)
        },
        arrangeForward: function(a) {
            return this.arrange(a, 3)
        },
        arrangeBackward: function(a) {
            return this.arrange(a, 4)
        }
    };
    var f = function(a, b) {
        this._d = a, this._g = c.extend(b || {}, {
            type: "__grp",
            fillStyle: "#fff",
            lw: .25
        }), void 0 === this._g.id && a.gen(this._g), b.x || this.update()
    };
    f.prototype = {
        update: function() {
            var a = 0,
                b = 0,
                d = 0,
                e = 0,
                f = this,
                g = 0;
            c.each(f._g.children, function(c, g) {
                "string" == typeof c && (c = f._d.id(c)), c.grpId = f._g.id;
                var h = c.dx || 0,
                    i = c.dy || 0,
                    j = c.x + h,
                    k = c.y + i,
                    l = c.w,
                    m = c.h;
                0 === g ? (a = Math.min(j, j + l), b = Math.min(k, k + m), d = Math.max(j, j + l), e = Math.max(k, k + m)) : (a = Math.min(j, a, j + l), b = Math.min(k, b, k + m), d = Math.max(j, d, j + l), e = Math.max(k, e, k + m))
            }), c.extend(f._g, {
                x: a - g,
                y: b - g,
                w: d - a + 2 * g,
                h: e - b + 2 * g
            }, !0), delete f._g.d
        },
        childIds: function() {
            var a = this,
                b = a._d,
                d = a._g.children,
                e = [];
            return c.each(d, function(a) {
                "__grp" === a.type ? e = e.concat(new f(b, a).childIds()) : e[e.length] = a
            }), e
        },
        isDeepId: function(a) {
            var b = this,
                d = b._g.children,
                e = !1;
            return c.each(d, function(c) {
                if ("__grp" === c.type) return e = new f(b._d, c).isDeepId(a) || c.id === a
            }), e
        },
        ungroup: function() {
            var a = this,
                b = a._g.children,
                d = [];
            return c.each(b, function(b) {
                "string" == typeof b ? b = a._d.id(b) : d[d.length] = b, delete b.grpId
            }), d
        },
        loop: function(a) {
            var b = this,
                d = b._g.children;
            c.each(d, function(c) {
                var d = null;
                "string" == typeof c && (c = b._d.id(c)), "__grp" === c.type && (d = new f(b._d, c), d.loop(a)), a(c, d)
            })
        },
        lock: function(a) {
            var b = void 0 === a || a;
            this.loop(function(a) {
                a.locked = b
            })
        }
    };
    var g = function(a) {
            var b = [],
                d = function(d) {
                    var e = null,
                        g = [],
                        i = [];
                    return c.each(d, function(a) {
                        if (a.grpId) {
                            if (i[a.grpId]) return;
                            i[a.grpId] = !0, g = g.concat(b.splice(h(a.grpId), 1))
                        } else g[g.length] = a.id
                    }), g.length > 1 && (e = new f(a, {
                        children: g
                    }), b[b.length] = e._g), e
                },
                e = function(d) {
                    var e = [],
                        g = [],
                        j = null,
                        k = [];
                    c.each(d, function(a) {
                        if (a.grpId) {
                            if (j = i(a.grpId), g[j]) return;
                            g[j] = !0;
                            var b = h(j);
                            e[e.length] = b
                        }
                    }), e.length > 0 && (c.each(b, function(b, d) {
                        var g = c.inArray(e, d);
                        g === -1 ? k[k.length] = b : (k = k.concat(new f(a, b).ungroup()), e.splice(g, 1))
                    }), b = k)
                },
                g = function(d) {
                    var e = c.getArray(b, d);
                    return "number" == typeof d && (e = new f(a, e)), e
                },
                h = function(a) {
                    var d = -1;
                    return c.each(b, function(b, c) {
                        if (b.id === i(a)) return d = c, !0
                    }), d
                },
                i = function(d) {
                    var e = null;
                    return c.each(b, function(a) {
                        if (a.id === d) return e = a.id, !0
                    }), null == e && (e = d, c.each(b, function(b) {
                        if (new f(a, b).isDeepId(d)) return e = b.id, !0
                    })), e
                },
                j = function(a) {
                    return b[h(a)]
                },
                k = function(a) {
                    var c = h(a);
                    c !== -1 && b.splice(c, 1)
                };
            return {
                group: d,
                ungroup: e,
                get: g,
                data: function(a) {
                    return "undefined" == typeof a ? g() : void(b = a)
                },
                indexById: h,
                rootId: i,
                id: j,
                removeById: k
            }
        },
        h = function(a, b) {
            this._d = a, this._conn = b || {}
        };
    h.prototype = {
        doSelectedSprite: function(a, b) {
            var c = this._d,
                d = a[0],
                e = a[1],
                f = a[2],
                g = a[3],
                h = null,
                i = null;
            d === -1 || g || !this.isConnector(i = c.id(f)) || 1 !== d || 6 !== e && 9 !== e || (h = this.indexOf(i, b), this.doOverSprite(h))
        },
        isConnector: function(a) {
            return c.isConnector(a)
        },
        connected: function(a) {
            var b = 0,
                c = this._conn;
            return this.isConnector(a) ? (b = 1, c[a.id] && (b = 2 | b)) : this.find(a, function() {
                return b = 2, !0
            }), b
        },
        connectType: function(a) {
            var b = this._conn,
                c = 0,
                d = 0;
            return b[a.id] && (c = b[a.id].sid ? 1 : 0, d = b[a.id].eid ? 2 : 0), c | d
        },
        indexOf: function(a, b) {
            var c = this._d,
                d = function(a) {
                    return function(b) {
                        return b.id === a.id
                    }
                }(a);
            return c.indexOf(b, d)
        },
        connect: function(a, b, d) {
            var e = a.x + (a.dx || 0),
                f = a.y + (a.dy || 0),
                g = a.w,
                h = a.h,
                i = null,
                j = this._d,
                k = null,
                l = null,
                m = null;
            b = b || 3, 1 === (1 & b) && (i = [e, f], void 0 === d && (d = this.indexOf(a, i)), d !== -1 && (l = j.get(d), k = c.evalConnPoint(l, i), k && (m = l.id)), this._setConnected(a, 1, m)), 2 === (2 & b) && (i = [e + g, f + h], m = null, void 0 === d && (d = this.indexOf(a, i)), d !== -1 && (l = j.get(d), k = c.evalConnPoint(l, i), k && (m = l.id)), this._setConnected(a, 2, m))
        },
        _setConnected: function(a, b, c) {
            var d = this._conn,
                e = d[a.id];
            return void 0 === e && (e = {}, d[a.id] = e), 1 === (1 & b) && (c ? e.sid = c : delete e.sid), 2 === (2 & b) && (c ? e.eid = c : delete e.eid), void 0 === e.sid && void 0 === e.eid && delete d[a.id], this
        },
        doOverSprite: function(a) {
            var b = this._d,
                d = b.get(a);
            a === -1 ? (delete this._connSp, delete this._curInd) : a !== this._curInd && (this._connSp = c.extend({
                type: "__connpoint",
                fillStyle: "#f00",
                lw: .25,
                style: 3,
                d: c.connPointsPath(d)
            }, d), this._currInd = a)
        },
        find: function(a, b) {
            var c = this._d,
                d = this._conn;
            for (var e in d) {
                var f = d[e],
                    g = 0;
                if (f.sid === a.id && (g = 1), f.eid === a.id && (g = 2 | g), 0 !== g && b(c.id(e), g)) break
            }
        },
        _doRenderer: function(a) {
            this._connSp && a.renderer([this._connSp])
        }
    };
    var i = function(a) {
        this.inst = a, this._init()
    };
    i.prototype = {
        _init: function() {
            this._overInd = -1, this._listeners = {}, this._bindEventScope(), this.disabled(!1)
        },
        disabled: function(a) {
            return void 0 !== a && (a ? (this._removeEventListener(), this._disabled = !0, this._reset()) : (this._addEventListener(), this._disabled = !1)), this._disabled
        },
        _removeEventListener: function() {
            var a = this.inst,
                b = a.c;
            b.removeEventListener("touchstart", this._touchstartref), b.removeEventListener("touchmove", this._touchmoveref), b.removeEventListener("touchend", this._touchendref), b.removeEventListener("mousedown", this._mousedownref), b.removeEventListener("mousemove", this._mousemoveref), b.removeEventListener("mouseup", this._mouseupref)
        },
        _addEventListener: function() {
            var a = this.inst,
                b = a.c;
            b.addEventListener("touchstart", this._touchstartref, !1), b.addEventListener("touchmove", this._touchmoveref, !1), b.addEventListener("touchend", this._touchendref, !1), b.addEventListener("mousedown", this._mousedownref, !1), b.addEventListener("mousemove", this._mousemoveref, !1), b.addEventListener("mouseup", this._mouseupref, !1)
        },
        newSprite: function() {
            var a = this.inst,
                b = 1,
                c = 1,
                d = this._opt,
                e = d.type,
                f = d.mode,
                g = a._data;
            return "string" == typeof e && (e = {
                type: e
            }), 1 === f && (b = 80, c = 80), e.w = e.w || b, e.h = e.h || c, e.opacity = .5, g.gen(e)
        },
        mode: function(a) {
            this._opt = a
        },
        _bindEventScope: function() {
            this._touchstartref = this._touchstart.bind(this), this._touchmoveref = this._touchmove.bind(this), this._touchendref = this._touchend.bind(this), this._mousedownref = this._mousedown.bind(this), this._mousemoveref = this._mousemove.bind(this), this._mouseupref = this._mouseup.bind(this)
        },
        _touch: function(a) {
            for (var b = {}, c = a.touches[0].target, d = c.offsetLeft, e = c.offsetTop; c.offsetParent;) d += c.offsetParent.offsetLeft, e += c.offsetParent.offsetTop, c = c.offsetParent;
            return b.offsetX = a.touches[0].pageX - d, b.offsetY = a.touches[0].pageY - e, b
        },
        _touchstart: function(a) {
            var b = this._touch(a);
            this.touchDetected = !0, this._onstart(b)
        },
        _touchmove: function(a) {
            a.preventDefault(), this._onmove(this._touch(a))
        },
        _touchend: function(a) {
            a.preventDefault(), this._evalDblclick(this._touch(a))
        },
        _mousedown: function(a) {
            this.touchDetected || (a.preventDefault(), void 0 === this._ending && this._onstart(a))
        },
        _mousemove: function(a) {
            this.touchDetected || (a.preventDefault(), void 0 === this._ending && this._onmove(a))
        },
        _mouseup: function(a) {
            this.touchDetected || (a.preventDefault(), this._evalDblclick(a))
        },
        _evalDblclick: function(a) {
            var b = this,
                c = b._lastime || 0,
                d = (new Date).getTime() - c,
                e = this._opt;
            if (d < 280) clearTimeout(b._ending), delete b._ending, b._dblclick(a);
            else if (b._lastime = (new Date).getTime(), !e || 2 !== e.mode && 3 !== e.mode) b._onend(a);
            else {
                var f = {
                    offsetX: a.offsetX || a.layerX,
                    offsetY: a.offsetY || a.layerY,
                    target: a.target || a.srcElement
                };
                b._ending = setTimeout(function() {
                    b._onend(f), delete b._ending
                }, 280)
            }
        },
        _onstart: function(a) {
            var b = this.inst,
                d = b._data,
                e = b._scale,
                f = (a.offsetX || a.layerX) / e[0],
                g = (a.offsetY || a.layerY) / e[1],
                h = [f, g],
                i = this._opt,
                j = d._s,
                k = -1,
                l = this._tpt;
            if (void 0 === this._clickInd) {
                if (i) {
                    var m = i.mode;
                    if (1 !== m && (void 0 === this._nsp || null == this._nsp)) {
                        var n = this.newSprite();
                        if (n.x = f, n.y = g, 2 === m || 3 === m) n.ex = [{
                            dx: 0,
                            dy: 0
                        }], n.style = 2;
                        else if (4 === m) {
                            if (this._overInd !== -1) {
                                var o = c.evalConnPoint(d.get(this._overInd), h);
                                null !== o && (n.x = o[0], n.y = o[1])
                            }
                            n.style = 2
                        }
                        this._nsp = n
                    }
                } else {
                    if (this._overInd !== -1) {
                        var p = d.get(this._overInd);
                        if ("line" === p.type && l && 3 === l[0]) {
                            var q = p.ex || [],
                                r = p.dx || 0,
                                s = p.dy || 0;
                            c.isArray(q) || (q = [q]);
                            var t = c.spRotate(p, h, -1, !0);
                            q.splice(l[1], 0, {
                                dx: t[0] - p.x - r,
                                dy: t[1] - p.y - s
                            }), p.ex = q, this._evalSelected(a)
                        }
                    }
                    k = this._overInd;
                    var u = k !== -1 || !!l && l[0] !== -1;
                    k !== -1 || u ? k !== -1 && j.evalClick(k) : (j.update([]), this._selRect = {
                        type: "rect",
                        dashed: 0,
                        style: 2,
                        x: f,
                        y: g,
                        w: 1,
                        h: 1
                    })
                }
                this._clickInd = k, this._spt = h
            }
            b.update();
            var v = this._listeners.start;
            v && c.each(v, function(a) {
                console.log(a), a(k)
            })
        },
        _onmove: function(a) {
            var b = this,
                d = b.inst,
                e = d._data,
                f = d._scale,
                g = (a.offsetX || a.layerX) / f[0],
                h = (a.offsetY || a.layerY) / f[1],
                i = [g, h],
                j = b._spt || i,
                k = j[0],
                l = j[1],
                m = a.target || a.srcElement,
                n = b._nsp,
                o = b._opt,
                p = e._s,
                q = b._selRect,
                r = b._tpt,
                s = e._c,
                t = !0,
                u = b._clickInd,
                v = u !== -1 || !!r && r[0] !== -1;
            if (o)
                if (1 === o.mode) n || (n = b.newSprite(), b._nsp = n), n.x = g - n.w / 2, n.y = h - n.h / 2, delete n.d;
                else if (2 === o.mode || 3 === o.mode) {
                if (m.style.cursor = "crosshair", t = !!n) {
                    var w = n.ex,
                        x = w[w.length - 1],
                        y = g - n.x,
                        z = h - n.y;
                    void 0 === b._clickInd || 3 === o.mode ? (w.length < 2 && (x = {
                        dx: y,
                        dy: z
                    }, w[w.length] = x), x.dx = y, x.dy = z) : w[w.length] = {
                        dx: y,
                        dy: z
                    }, delete n.d
                }
            } else if (4 === o.mode) {
                var A = g - k,
                    B = h - l,
                    C = b._overInd;
                if (m.style.cursor = "crosshair", n) {
                    if (b._overInd !== -1) {
                        var D = c.evalConnPoint(e.get(b._overInd), i);
                        null !== D && (A = D[0] - n.x, B = D[1] - n.y)
                    }
                    n.w = A, n.h = B, delete n.d, C = s.indexOf(n, i)
                } else C = e.indexOf(i);
                s.doOverSprite(C)
            } else m.style.cursor = "crosshair", t = !!n, t && (n.w = g - k, n.h = h - l, delete n.d, delete n.ex);
            else void 0 === b._clickInd ? (b._evalSelected(a), t = !1) : b._clickInd !== -1 || v ? v && (b._targetObj = p.target(r, j, i), s.doSelectedSprite(r, i)) : (q.x = k, q.y = l, q.w = g - k, q.h = h - l, delete q.d);
            t && d.update();
            var E = this._listeners.move;
            E && c.each(E, function(a) {
                a.apply(d, r)
            })
        },
        _onend: function(a) {
            var b = this.inst,
                d = b._data,
                e = b._scale,
                f = (a.offsetX || a.layerX) / e[0],
                g = (a.offsetY || a.layerY) / e[1],
                h = [f, g],
                i = this._spt || h,
                j = i[0],
                k = i[1],
                l = this._tpt,
                m = a.target || a.srcElement,
                n = this._opt,
                o = this._nsp,
                p = !0,
                q = d._s,
                r = d._c,
                s = this._clickInd,
                t = s !== -1 || null != l && l[0] !== -1;
            if (n) {
                var u = n.mode;
                if (1 !== u) {
                    var v = f - j,
                        w = g - k;
                    if (2 === u || 3 === u) {
                        v = f - o.x, w = g - o.y;
                        var x = o.ex,
                            y = [o.x + x[0].dx, o.y + x[0].dy];
                        p = x.length > 2 && c.isNearbyPoint(y, h), p ? (x.splice(x.length - 1, 1), o.closed = !0, o.style = 3, c.adjSprite(o)) : (x[x.length] = {
                            dx: v,
                            dy: w
                        }, o.w = Math.max(o.w, v), o.h = Math.max(o.h, w), o.style = 2)
                    } else if (4 === u) {
                        if (v = f - o.x, w = g - o.y, this._overInd !== -1) {
                            var z = c.evalConnPoint(d.get(this._overInd), h);
                            null !== z && (v = z[0] - o.x, w = z[1] - o.y)
                        }
                        r.doOverSprite(-1), o.w = v, o.h = w
                    } else o.w = v || 80, o.h = w || 80
                }
                if (delete o.d, p) {
                    m.style.cursor = "default", delete o.opacity, d.add(o), r.isConnector(o) && r.connect(o, 3);
                    var A = d.get().length - 1;
                    q.update(A, !0), delete this._nsp, delete this._opt, delete this._mode, l = [4, A]
                }
            } else if (s === -1 && !t) {
                var B = d.indexsOf(i, h);
                B.length > 0 && q.update(B, !0)
            }
            this._targetObj && (q.target(l, i, h, !0), b.update(), q._updateSelSprite(), r.doOverSprite(-1), l[0] !== -1 || i[0] === h[0] && i[1] === h[1] || (l = [5, s])), this._reset(), b.update();
            var C = this._listeners.end;
            C && c.each(C, function(a) {
                a.apply(b, l)
            })
        },
        _reset: function() {
            delete this._selRect, delete this._targetObj, delete this._clickInd
        },
        _dblclick: function(a) {
            var b = this.inst,
                d = b._data,
                e = b._scale,
                f = (a.offsetX || a.layerX) / e[0],
                g = (a.offsetY || a.layerY) / e[1],
                h = [f, g],
                i = a.target || a.srcElement,
                j = this._opt,
                k = this._nsp,
                l = d._s;
            if (j) {
                var m = j.mode;
                if (2 === m || 3 === m) {
                    var n = k.ex,
                        o = [k.x + n[0].dx, k.y + n[0].dy],
                        p = c.isNearbyPoint(o, h);
                    k.style = p ? 3 : 2, p && (k.closed = p, n.splice(n.length - 1, 1)), c.adjSprite(k), delete k.d, i.style.cursor = "default", delete k.opacity, d.add(k), l.update(d.get().length - 1), delete this._nsp, delete this._opt, delete this._mode, delete this._clickInd, b.update()
                }
            }
        },
        _evalSelected: function(a) {
            var b = this.inst,
                d = b._data,
                e = d._g,
                f = d._s,
                g = b._scale,
                h = (a.offsetX || a.layerX) / g[0],
                i = (a.offsetY || a.layerY) / g[1],
                j = [h, i],
                k = a.target || a.srcElement,
                l = "default",
                m = d.indexOf(j),
                n = null;
            if (m !== -1 && (l = "move"), f) {
                n = f.targetPointType(j);
                var o = n[0],
                    p = n[1],
                    q = n[2],
                    r = n[3],
                    s = null;
                switch (o !== -1 && (m !== -1 ? (s = d.get(m), s.id !== q && (m = d.indexById(q))) : m = d.indexById(q)), m !== -1 && (s = d.get(m)), o) {
                    case 3:
                    case 2:
                    case 0:
                        l = "crosshair";
                        break;
                    case 1:
                        var t = 0;
                        if (s && (t = s.rotate || 0), r) {
                            var u = e.id(r);
                            t = u.rotate || 0
                        }
                        l = c.resizeCursor(p, t);
                        break;
                    default:
                        s && (n[2] = s.id)
                }
            }
            k.style.cursor = l, this._overInd = m, this._tpt = n
        },
        on: function(a, b) {
            var c = this._listeners[a];
            c ? c[c.length] = b : (c = [b], this._listeners[a] = c)
        }
    };
    var j = function(a, b) {
        this._types = {
            __sel: c.edgePointPath,
            __grp: c.edgePointPath,
            __line: c.linePointPath
        }, this._data = a, this._selInds = b || [], this._selSps = [], this._updateSelSprite()
    };
    j.prototype = {
        _resize: function(a, b, d) {
            var e = a.x,
                f = a.y,
                g = a.w,
                h = a.h,
                i = a.rc || [e + g / 2, f + h / 2],
                j = d[0],
                k = d[1],
                l = a.initRotate || 0,
                m = (a.rotate || 0) + l,
                n = "line" === a.type,
                o = n ? [0, 0] : [1, 1];
            if (1 === (1 & b) && (a.w += j, n || (o[0] += j / g)), 2 === (2 & b) && (a.y += k, a.h -= k, n ? o[1] = -k : o[1] -= k / h), 4 === (4 & b) && (a.x += j, a.w -= j, n ? o[0] = -j : o[0] -= j / g), 8 === (8 & b) && (a.h += k, n || (o[1] += k / h)), 0 !== m) {
                var p = a.x + a.w / 2,
                    q = a.y + a.h / 2,
                    r = c.rotate(i, [p, q], m);
                a.x += r[0] - p, a.y += r[1] - q
            }
            c.updateEx(a, o, !n)
        },
        _gresize: function(a, b, d, e) {
            var f = this,
                g = f._data,
                h = a.x,
                i = a.y,
                j = a.w,
                k = a.h,
                l = h + j,
                m = i + k,
                n = a.rc || [h + j / 2, i + k / 2],
                o = 1,
                p = d[0],
                q = d[1],
                r = g._g,
                s = e || r.id(r.rootId(a.grpId)),
                t = a.initRotate || 0,
                u = (a.rotate || 0) + t,
                v = [1, 1];
            if (1 === (1 & b) && (o = 1 + p / s.w, a.w = j * o, a.x = s.x + parseInt((h - s.x) * o), v[0] = o), 2 === (2 & b) && (o = 1 - q / s.h, a.h = k * o, a.y = s.y + s.h - a.h + (m - s.y - s.h) * o, v[1] = o), 4 === (4 & b) && (o = 1 - p / s.w, a.w = j * o, a.x = s.x + s.w - a.w + (l - s.x - s.w) * o, v[0] = o), 8 === (8 & b) && (o = 1 + q / s.h, a.h = k * o, a.y = s.y + (i - s.y) * o, v[1] = o), 0 !== u) {
                var w = a.x + a.w / 2,
                    x = a.y + a.h / 2,
                    y = c.rotate(n, [w, x], u);
                a.x += y[0] - w, a.y += y[1] - x
            }
            c.updateEx(a, v, !0)
        },
        _indexOfRotate: function(a) {
            for (var b = this.data(), d = -1, e = 0; e < b.length; e++)
                if (c.isRotatePoint(b[e], a)) {
                    d = e;
                    break
                }
            return d
        },
        _rotate: function(a, b, c) {
            var d = a.x,
                e = a.y,
                f = a.w,
                g = a.h,
                h = d + f / 2,
                i = e + g / 2,
                j = Math.atan2(c[1] - i, c[0] - h) - Math.atan2(b[1] - i, b[0] - h);
            return [h, i, j]
        },
        _exPoint: function(a, b, d, e) {
            var f = e[0] - d[0],
                g = e[1] - d[1],
                h = a.ex || [];
            c.isArray(h) || (h = [h]), b !== -1 && b < h.length && ("line" === a.type && c.isOverExLine(a, b, e) ? h.splice(b, 1) : (h[b].dx += f, h[b].dy += g), a.ex = 1 === h.length ? h[0] : h)
        },
        targetPointType: function(a) {
            var b = this,
                d = b._data,
                e = b.data(),
                f = -1,
                g = d._g,
                h = {},
                i = null,
                j = -1,
                k = null;
            return c.each(e, function(b, d) {
                if (k = null, b.grpId) {
                    if (k = g.rootId(b.grpId), h[k]) return !1;
                    b = g.id(k), h[k] = !0
                }
                return f = c.indexOfEx(b, a), f !== -1 ? (j = 0, i = b.id, !0) : (f = c.edgePointType(b, a), 0 !== f ? (j = 1, i = b.id, !0) : (f = -1, f === -1 && c.isRotatePoint(b, a) ? (j = 2, f = d, i = b.id, !0) : "line" === b.type && (f = c.indexOfExHalf(b, a), f !== -1) ? (j = 3, i = b.id, !0) : void 0))
            }), [j, f, i, k]
        },
        target: function(a, b, d, e) {
            var g = this,
                h = g._data,
                i = g.data(),
                j = h._g,
                k = [],
                l = 0,
                m = a[0],
                n = null,
                o = {},
                p = d[0] - b[0],
                q = d[1] - b[1],
                r = 1,
                s = 1,
                t = -1,
                u = h._c,
                v = !1;
            if (null != a[2]) {
                if (n = a[3] ? j.id(a[3]) : h.id(a[2]), v = u.isConnector(n), v && (t = u.indexOf(n, d), t !== -1)) {
                    var w = c.evalConnPoint(h.get(t), d);
                    null != w && (6 === a[1] ? b = [n.x, n.y] : 9 === a[1] && (b = [n.x + n.w, n.y + n.h]), d = w, p = d[0] - b[0], q = d[1] - b[1])
                }
                1 === m && (b = c.spRotate(n, b, -1, !0), d = c.spRotate(n, d, -1, !0), p = d[0] - b[0], q = d[1] - b[1]), 0 !== n.w && (r = p / n.w), 0 !== n.h && (s = q / n.h), 2 === m && (l = g._rotate(n, b, d)[2])
            }
            return c.each(i, function(i) {
                if (v && m !== -1 && i.id !== n.id) return !1;
                var t = null,
                    w = null,
                    x = null,
                    y = null;
                if (i.grpId) {
                    if (t = j.rootId(i.grpId), o[t]) return !1;
                    i = j.id(t), w = new f(h, i), y = [i.x + i.w / 2, i.y + i.h / 2, l], o[t] = !0
                }
                e || (i = c.clone(i));
                var z = i.x,
                    A = i.y,
                    B = i.w,
                    C = i.h,
                    D = z + B / 2,
                    E = A + C / 2,
                    F = 0;
                switch (m) {
                    case 0:
                        g._exPoint(i, a[1], b, d);
                        break;
                    case 1:
                        if (F = u.connected(i), !v && 3 === F || v && !u.isConnector(i)) return !1;
                        x = [0 === B ? p : B * r, 0 === C ? q : C * s], null != w && w.loop(function(b) {
                            "__grp" === b.type || e || (b = c.clone(b), b.opacity = .5, k[k.length] = b), g._gresize(b, a[1], x, w._g), delete b.d
                        }), g._resize(i, a[1], x), v || u.find(i, function(a, b) {
                            e || (a = c.clone(a), a.opacity = .5);
                            var d = 0,
                                f = 0,
                                h = null;
                            1 === b && (d = a.x - z, f = a.y - A, h = [i.x + i.w * d / B - a.x, i.y + i.h * f / C - a.y], g._resize(a, 6, h)), 2 === b && (d = a.x + a.w - z, f = a.y + a.h - A, h = [i.x + i.w * d / B - a.x - a.w, i.y + i.h * f / C - a.y - a.h], g._resize(a, 9, h)), delete a.d, k[k.length] = a
                        });
                        break;
                    case 2:
                        if (F = u.connected(i), !v && 3 === F || v && !u.isConnector(i)) return !1;
                        null != w && w.loop(function(a) {
                            var b = a.x,
                                d = a.y,
                                f = a.w,
                                g = a.h,
                                h = b + f / 2,
                                i = d + g / 2,
                                j = a.rotate || 0;
                            "__grp" === a.type || e || (a = c.clone(a), a.opacity = .5, k[k.length] = a);
                            var m = c.rotate(y, [h, i], l);
                            a.x += m[0] - h, a.y += m[1] - i, a.rotate = j + l, delete a.d
                        }), i.rotate = (i.rotate || 0) + l, v || u.find(i, function(a, b) {
                            var d = u.connectType(a);
                            e || (a = c.clone(a), a.opacity = .5);
                            var f = -1,
                                g = a._x || a.x,
                                h = a._y || a.y,
                                i = null;
                            3 === d && (f = c.inArray(k, function(b) {
                                return b.id === a.id
                            }), f !== -1 && (a = k[f])), 1 === b && (i = c.rotate([D, E], [a.x, a.y], l), a._x = a.x, a._y = a.y, a.x = i[0], a.y = i[1]), 2 === b && (i = c.rotate([D, E], [g + a.w, h + a.h], l), a.w = i[0] - a.x, a.h = i[1] - a.y, delete a._x, delete a._y), delete a.d, f === -1 && (k[k.length] = a)
                        });
                        break;
                    default:
                        null != w && w.loop(function(a) {
                            "__grp" === a.type || e || (a = c.clone(a), a.opacity = .5, k[k.length] = a), a.x += p, a.y += q, g._connOnMove(a, [p, q], k, e), delete a.d
                        }), i.x += p, i.y += q, v || g._connOnMove(i, [p, q], k, e)
                }
                "__grp" === i.type || e || (i.opacity = .5, k[k.length] = i), delete i.d
            }), e && v && u.connect(n, 6 === a[1] ? 1 : 9 === a[1] ? 2 : 3, t), this._onend = !!e, k
        },
        _connOnMove: function(a, b, d, e) {
            var f = this,
                g = f._data,
                h = g._c,
                i = b[0],
                j = b[1];
            h.find(a, function(a, b) {
                if (f.indexOf(a) === -1) {
                    var g = h.connectType(a);
                    e || (a = c.clone(a), a.opacity = .5), 3 === g ? (1 === b && f._resize(a, 6, [i, j]), 2 === b && f._resize(a, 9, [i, j]), delete a.d, d[d.length] = a) : (a.x += i, a.y += j, delete a.d, d[d.length] = a)
                }
            })
        },
        indexOf: function(a) {
            var b = this.data(),
                d = -1;
            return c.each(b, function(b, c) {
                if (a.id === b.id) return d = c, !0
            }, !0), d
        },
        update: function(a, b) {
            if (this._onend = !!b, void 0 !== a) {
                var c = [0, this._selInds.length].concat(a);
                Array.prototype.splice.apply(this._selInds, c), delete this._curInd
            }
            this._updateSelSprite()
        },
        data: function(a) {
            var b = this._data,
                c = this._selInds;
            return void 0 === a ? b.get(c) : b.get(c[a])
        },
        newData: function(a) {
            return function(b) {
                var c = a;
                return void 0 !== b && (c = a[b]), c
            }
        },
        _updateSelSprite: function(a) {
            for (var b = this, d = b._data, e = d._c, f = b.data(), g = [], h = d._g, i = {}, j = function(a) {
                    return c.inArray(["x", "y", "w", "h", "ex", "rotate"], a) === -1
                }, k = 0; k < f.length; k++) {
                var l = f[k],
                    m = k === b._curInd,
                    n = .5;
                if (l.grpId) {
                    var o = h.rootId(l.grpId);
                    if (i[o]) continue;
                    i[o] = !0;
                    var p = h.indexById(o);
                    if (p !== -1) {
                        var q = h.get(p);
                        a && q.update(), q._g.lw = n, g[g.length] = q._g
                    }
                } else if (g[g.length] = c.extend({
                        type: "line" === l.type ? "__line" : "__sel",
                        strokeStyle: m ? "#000" : "#888",
                        fillStyle: "#fff",
                        lw: n,
                        style: 3
                    }, l, !1, j), b._onend && e.isConnector(l)) {
                    var r = e.connectType(l);
                    0 !== r && (g[g.length] = {
                        fillStyle: "#f00",
                        d: c.connPointsPath(l, r)
                    })
                }
            }
            b._selSps = g
        },
        _doRenderer: function(a) {
            a.jh2d.renderer(this._selSps, this._types)
        },
        remove: function() {
            var a = this,
                b = a._data,
                c = this.data();
            b.remove(c), this.update([])
        },
        style: function(a) {
            var d = this.data();
            c.each(d, function(c) {
                b(c, a)
            })
        },
        group: function() {
            var a = this,
                b = a._data,
                c = b._g;
            c.group(this.data()), this._updateSelSprite(!0)
        },
        ungroup: function() {
            var a = this,
                b = a._data,
                c = b._g;
            c.ungroup(this.data()), this._updateSelSprite(!0)
        },
        arrange: function(a) {
            var b = this,
                c = b._data;
            c.arrange(this.data(), a)
        },
        evalClick: function(a) {
            var b = this,
                c = b._data,
                d = this.indexOf(c.get(a));
            d === -1 ? this.update(a) : (this._curInd = d, this._updateSelSprite())
        },
        align: function(a, b) {
            var d = this,
                e = d._data,
                g = d._curInd,
                h = d.data(),
                i = e._g,
                j = b || 0,
                k = ["x", "y"],
                l = ["w", "h"],
                m = [1, 8];
            if (void 0 !== g && g !== -1) {
                var n = h[g],
                    o = null;
                n.grpId && (o = i.rootId(n.grpId), n = i.id(o));
                var p = [n.x, n.y],
                    q = [n.w, n.h],
                    r = {};
                c.each(h, function(b, c) {
                    var h = null,
                        n = b,
                        s = null,
                        t = 0;
                    if (b.grpId) {
                        if (s = i.rootId(b.grpId), null != o && s === o) return !1;
                        if (r[s]) return !1;
                        n = i.id(s), h = new f(e, n), r[s] = !0
                    }
                    if (g !== c) {
                        switch (a) {
                            case 0:
                                t = p[j] - n[k[j]];
                                break;
                            case 1:
                                t = p[j] + q[j] - n[k[j]] - n[l[j]];
                                break;
                            case 2:
                                t = p[j] + q[j] / 2 - n[k[j]] - n[l[j]] / 2;
                                break;
                            case 3:
                                t = q[j] - n[l[j]], null != h ? (h.resize(m[j], 0 === j ? [t, 0] : [0, t], h, d._gresize.bind(d)), n[l[j]] += t, delete n.d) : d._resize(b, m[j], [0, 0], 0 === j ? [t, 0] : [0, t])
                        }
                        0 !== t && 3 !== a && (null != h ? (h.move(0 === j ? [t, 0] : [0, t]), n[k[j]] += t, delete n.d) : b[k[j]] += t), delete b.d
                    }
                }), this._updateSelSprite()
            }
        },
        current: function() {
            var a, b = this,
                c = b._curInd,
                d = b.data();
            return void 0 !== c && c !== -1 && (a = d[c]), a
        }
    };
    var k = {
            _grid: c.bgGridPath
        },
        l = function(a) {
            var b = "string" == typeof a.canvas ? document.getElementById(a.canvas) : a.canvas,
                c = a.types || {},
                d = this;
            d._bg = {
                type: "_grid",
                x: 0,
                y: 0,
                w: b.width,
                h: b.height,
                style: 2,
                strokeStyle: "#eee"
            }, d._types = c, d.c = b, a.onResourceLoad = function() {
                d.update()
            }, d.jh2d = a.jh2d.create(a), d._scale = [1, 1], d.data(a), d._event = new i(d)
        };
    l.prototype = {
        data: function(a) {
            var b = null;
            return void 0 === a ? this._data.data() : (b = new e(a), this._data = b, a.o.bg && this._background(a.o.bg), void 0)
        },
        add: function(a) {
            this._data.add(a), this.update()
        },
        disabled: function(a) {
            var b = this._event;
            return b.disabled(a)
        },
        update: function(a) {
            var d = this,
                e = d._event,
                f = e._selRect,
                g = d._data,
                h = g._s,
                i = g._c,
                j = e._targetObj,
                l = e._nsp,
                m = d._types,
                n = d.jh2d,
                o = d._scale,
                p = d.c,
                q = d._bg;
            q.w === p.width && q.h === p.height || (q.w = p.width, q.h = p.height, delete q.d), a && c.each(h.data(), function(c) {
                b(c, a)
            }), n.save(), n.clear(), n.renderer(q, k), n.scale(o[0], o[1]), n.renderer(g.get(), m), h && h._doRenderer(d), f && n.renderer(f, m), j && n.renderer(j, m), l && n.renderer(l, m), i._doRenderer(n), n.restore()
        },
        mode: function(a) {
            var b = this._event;
            b.mode(a)
        },
        remove: function() {
            var a = this._data,
                b = a._s;
            b.remove(), this.update()
        },
        group: function() {
            var a = this._data,
                b = a._s;
            b.group(), this.update()
        },
        ungroup: function() {
            var a = this._data,
                b = a._s;
            b.ungroup(), this.update()
        },
        arrange: function(a) {
            var b = this._data,
                c = b._s;
            c.arrange(a), this.update()
        },
        bring2Front: function() {
            this.arrange(1)
        },
        send2Back: function() {
            this.arrange(2)
        },
        bring2Forward: function() {
            this.arrange(3)
        },
        send2Backward: function() {
            this.arrange(4)
        },
        align: function(a) {
            var b = this._data,
                c = b._s;
            c.align(a % 4, parseInt(a / 4)), this.update()
        },
        selecteds: function() {
            var a = this._data,
                b = a._s;
            return b.data()
        },
        style: function(a) {
            var b = this._data,
                c = b._s;
            c.style(a), this.update()
        },
        scale: function(a) {
            return void 0 !== a && (c.isArray(a) ? this._scale = a : this._scale = [a, a], this._background({
                scale: this._scale[0]
            }), this.update()), this._scale[0]
        },
        _background: function(a) {
            "boolean" == typeof a ? a = {
                hide: !a
            } : "string" == typeof a && (a = {
                type: a
            }), c.extend(this._bg, a, !0), delete this._bg.d
        },
        background: function(a) {
            return void 0 === a ? this._bg : (this._background(a), void this.update())
        },
        on: function(a, b) {
            var c = this._event;
            c.on(a, b)
        }
    };
    var m = function(a) {
        return new l(a)
    };
    return {
        create: m
    }
});
/*!
 * Bootstrap Colorpicker v2.3.3
 * http://mjolnic.github.io/bootstrap-colorpicker/
 */
! function(a) {
    "use strict";
    "object" == typeof exports ? module.exports = a(window.jQuery) : "function" == typeof define && define.amd ? define(["jquery"], a) : window.jQuery && !window.jQuery.fn.colorpicker && a(window.jQuery)
}(function(a) {
    "use strict";
    var b = function(b, c) {
        this.value = {
            h: 0,
            s: 0,
            b: 0,
            a: 1
        }, this.origFormat = null, c && a.extend(this.colors, c), b && (void 0 !== b.toLowerCase ? (b += "", this.setColor(b)) : void 0 !== b.h && (this.value = b))
    };
    b.prototype = {
        constructor: b,
        colors: {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32",
            transparent: "transparent"
        },
        _sanitizeNumber: function(a) {
            return "number" == typeof a ? a : isNaN(a) || null === a || "" === a || void 0 === a ? 1 : "" === a ? 0 : void 0 !== a.toLowerCase ? (a.match(/^\./) && (a = "0" + a), Math.ceil(100 * parseFloat(a)) / 100) : 1
        },
        isTransparent: function(a) {
            return a ? (a = a.toLowerCase().trim(), "transparent" === a || a.match(/#?00000000/) || a.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/)) : !1
        },
        rgbaIsTransparent: function(a) {
            return 0 === a.r && 0 === a.g && 0 === a.b && 0 === a.a
        },
        setColor: function(a) {
            a = a.toLowerCase().trim(), a && (this.isTransparent(a) ? this.value = {
                h: 0,
                s: 0,
                b: 0,
                a: 0
            } : this.value = this.stringToHSB(a) || {
                h: 0,
                s: 0,
                b: 0,
                a: 1
            })
        },
        stringToHSB: function(b) {
            b = b.toLowerCase();
            var c;
            "undefined" != typeof this.colors[b] && (b = this.colors[b], c = "alias");
            var d = this,
                e = !1;
            return a.each(this.stringParsers, function(a, f) {
                var g = f.re.exec(b),
                    h = g && f.parse.apply(d, [g]),
                    i = c || f.format || "rgba";
                return h ? (e = i.match(/hsla?/) ? d.RGBtoHSB.apply(d, d.HSLtoRGB.apply(d, h)) : d.RGBtoHSB.apply(d, h), d.origFormat = i, !1) : !0
            }), e
        },
        setHue: function(a) {
            this.value.h = 1 - a
        },
        setSaturation: function(a) {
            this.value.s = a
        },
        setBrightness: function(a) {
            this.value.b = 1 - a
        },
        setAlpha: function(a) {
            this.value.a = Math.round(parseInt(100 * (1 - a), 10) / 100 * 100) / 100
        },
        toRGB: function(a, b, c, d) {
            a || (a = this.value.h, b = this.value.s, c = this.value.b), a *= 360;
            var e, f, g, h, i;
            return a = a % 360 / 60, i = c * b, h = i * (1 - Math.abs(a % 2 - 1)), e = f = g = c - i, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], {
                r: Math.round(255 * e),
                g: Math.round(255 * f),
                b: Math.round(255 * g),
                a: d || this.value.a
            }
        },
        toHex: function(a, b, c, d) {
            var e = this.toRGB(a, b, c, d);
            return this.rgbaIsTransparent(e) ? "transparent" : "#" + (1 << 24 | parseInt(e.r) << 16 | parseInt(e.g) << 8 | parseInt(e.b)).toString(16).substr(1)
        },
        toHSL: function(a, b, c, d) {
            a = a || this.value.h, b = b || this.value.s, c = c || this.value.b, d = d || this.value.a;
            var e = a,
                f = (2 - b) * c,
                g = b * c;
            return g /= f > 0 && 1 >= f ? f : 2 - f, f /= 2, g > 1 && (g = 1), {
                h: isNaN(e) ? 0 : e,
                s: isNaN(g) ? 0 : g,
                l: isNaN(f) ? 0 : f,
                a: isNaN(d) ? 0 : d
            }
        },
        toAlias: function(a, b, c, d) {
            var e = this.toHex(a, b, c, d);
            for (var f in this.colors)
                if (this.colors[f] === e) return f;
            return !1
        },
        RGBtoHSB: function(a, b, c, d) {
            a /= 255, b /= 255, c /= 255;
            var e, f, g, h;
            return g = Math.max(a, b, c), h = g - Math.min(a, b, c), e = 0 === h ? null : g === a ? (b - c) / h : g === b ? (c - a) / h + 2 : (a - b) / h + 4, e = (e + 360) % 6 * 60 / 360, f = 0 === h ? 0 : h / g, {
                h: this._sanitizeNumber(e),
                s: f,
                b: g,
                a: this._sanitizeNumber(d)
            }
        },
        HueToRGB: function(a, b, c) {
            return 0 > c ? c += 1 : c > 1 && (c -= 1), 1 > 6 * c ? a + (b - a) * c * 6 : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a
        },
        HSLtoRGB: function(a, b, c, d) {
            0 > b && (b = 0);
            var e;
            e = .5 >= c ? c * (1 + b) : c + b - c * b;
            var f = 2 * c - e,
                g = a + 1 / 3,
                h = a,
                i = a - 1 / 3,
                j = Math.round(255 * this.HueToRGB(f, e, g)),
                k = Math.round(255 * this.HueToRGB(f, e, h)),
                l = Math.round(255 * this.HueToRGB(f, e, i));
            return [j, k, l, this._sanitizeNumber(d)]
        },
        toString: function(a) {
            a = a || "rgba";
            var b = !1;
            switch (a) {
                case "rgb":
                    return b = this.toRGB(), this.rgbaIsTransparent(b) ? "transparent" : "rgb(" + b.r + "," + b.g + "," + b.b + ")";
                case "rgba":
                    return b = this.toRGB(), "rgba(" + b.r + "," + b.g + "," + b.b + "," + b.a + ")";
                case "hsl":
                    return b = this.toHSL(), "hsl(" + Math.round(360 * b.h) + "," + Math.round(100 * b.s) + "%," + Math.round(100 * b.l) + "%)";
                case "hsla":
                    return b = this.toHSL(), "hsla(" + Math.round(360 * b.h) + "," + Math.round(100 * b.s) + "%," + Math.round(100 * b.l) + "%," + b.a + ")";
                case "hex":
                    return this.toHex();
                case "alias":
                    return this.toAlias() || this.toHex();
                default:
                    return b
            }
        },
        stringParsers: [{
            re: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,
            format: "rgb",
            parse: function(a) {
                return [a[1], a[2], a[3], 1]
            }
        }, {
            re: /rgb\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
            format: "rgb",
            parse: function(a) {
                return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], 1]
            }
        }, {
            re: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
            format: "rgba",
            parse: function(a) {
                return [a[1], a[2], a[3], a[4]]
            }
        }, {
            re: /rgba\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
            format: "rgba",
            parse: function(a) {
                return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
            }
        }, {
            re: /hsl\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
            format: "hsl",
            parse: function(a) {
                return [a[1] / 360, a[2] / 100, a[3] / 100, a[4]]
            }
        }, {
            re: /hsla\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
            format: "hsla",
            parse: function(a) {
                return [a[1] / 360, a[2] / 100, a[3] / 100, a[4]]
            }
        }, {
            re: /#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
            format: "hex",
            parse: function(a) {
                return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16), 1]
            }
        }, {
            re: /#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
            format: "hex",
            parse: function(a) {
                return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16), 1]
            }
        }],
        colorNameToHex: function(a) {
            return "undefined" != typeof this.colors[a.toLowerCase()] ? this.colors[a.toLowerCase()] : !1
        }
    };
    var c = {
            horizontal: !1,
            inline: !1,
            color: !1,
            format: !1,
            input: "input",
            container: !1,
            component: ".add-on, .input-group-addon",
            sliders: {
                saturation: {
                    maxLeft: 100,
                    maxTop: 100,
                    callLeft: "setSaturation",
                    callTop: "setBrightness"
                },
                hue: {
                    maxLeft: 0,
                    maxTop: 100,
                    callLeft: !1,
                    callTop: "setHue"
                },
                alpha: {
                    maxLeft: 0,
                    maxTop: 100,
                    callLeft: !1,
                    callTop: "setAlpha"
                }
            },
            slidersHorz: {
                saturation: {
                    maxLeft: 100,
                    maxTop: 100,
                    callLeft: "setSaturation",
                    callTop: "setBrightness"
                },
                hue: {
                    maxLeft: 100,
                    maxTop: 0,
                    callLeft: "setHue",
                    callTop: !1
                },
                alpha: {
                    maxLeft: 100,
                    maxTop: 0,
                    callLeft: "setAlpha",
                    callTop: !1
                }
            },
            template: '<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div><div class="colorpicker-selectors"></div></div>',
            align: "right",
            customClass: null,
            colorSelectors: null
        },
        d = function(d, e) {
            if (this.element = a(d).addClass("colorpicker-element"), this.options = a.extend(!0, {}, c, this.element.data(), e), this.component = this.options.component, this.component = this.component !== !1 ? this.element.find(this.component) : !1, this.component && 0 === this.component.length && (this.component = !1), this.container = this.options.container === !0 ? this.element : this.options.container, this.container = this.container !== !1 ? a(this.container) : !1, this.input = this.element.is("input") ? this.element : this.options.input ? this.element.find(this.options.input) : !1, this.input && 0 === this.input.length && (this.input = !1), this.color = new b(this.options.color !== !1 ? this.options.color : this.getValue(), this.options.colorSelectors), this.format = this.options.format !== !1 ? this.options.format : this.color.origFormat, this.options.color !== !1 && (this.updateInput(this.color), this.updateData(this.color)), this.picker = a(this.options.template), this.options.customClass && this.picker.addClass(this.options.customClass), this.options.inline ? this.picker.addClass("colorpicker-inline colorpicker-visible") : this.picker.addClass("colorpicker-hidden"), this.options.horizontal && this.picker.addClass("colorpicker-horizontal"), "rgba" !== this.format && "hsla" !== this.format && this.options.format !== !1 || this.picker.addClass("colorpicker-with-alpha"), "right" === this.options.align && this.picker.addClass("colorpicker-right"), this.options.inline === !0 && this.picker.addClass("colorpicker-no-arrow"), this.options.colorSelectors) {
                var f = this;
                a.each(this.options.colorSelectors, function(b, c) {
                    var d = a("<i />").css("background-color", c).data("class", b);
                    d.click(function() {
                        f.setValue(a(this).css("background-color"))
                    }), f.picker.find(".colorpicker-selectors").append(d)
                }), this.picker.find(".colorpicker-selectors").show()
            }
            this.picker.on("mousedown.colorpicker touchstart.colorpicker", a.proxy(this.mousedown, this)), this.picker.appendTo(this.container ? this.container : a("body")), this.input !== !1 && (this.input.on({
                "keyup.colorpicker": a.proxy(this.keyup, this)
            }), this.input.on({
                "change.colorpicker": a.proxy(this.change, this)
            }), this.component === !1 && this.element.on({
                "focus.colorpicker": a.proxy(this.show, this)
            }), this.options.inline === !1 && this.element.on({
                "focusout.colorpicker": a.proxy(this.hide, this)
            })), this.component !== !1 && this.component.on({
                "click.colorpicker": a.proxy(this.show, this)
            }), this.input === !1 && this.component === !1 && this.element.on({
                "click.colorpicker": a.proxy(this.show, this)
            }), this.input !== !1 && this.component !== !1 && "color" === this.input.attr("type") && this.input.on({
                "click.colorpicker": a.proxy(this.show, this),
                "focus.colorpicker": a.proxy(this.show, this)
            }), this.update(), a(a.proxy(function() {
                this.element.trigger("create")
            }, this))
        };
    d.Color = b, d.prototype = {
        constructor: d,
        destroy: function() {
            this.picker.remove(), this.element.removeData("colorpicker", "color").off(".colorpicker"), this.input !== !1 && this.input.off(".colorpicker"), this.component !== !1 && this.component.off(".colorpicker"), this.element.removeClass("colorpicker-element"), this.element.trigger({
                type: "destroy"
            })
        },
        reposition: function() {
            if (this.options.inline !== !1 || this.options.container) return !1;
            var a = this.container && this.container[0] !== document.body ? "position" : "offset",
                b = this.component || this.element,
                c = b[a]();
            "right" === this.options.align && (c.left -= this.picker.outerWidth() - b.outerWidth()), this.picker.css({
                top: c.top + b.outerHeight(),
                left: c.left
            })
        },
        show: function(b) {
            return this.isDisabled() ? !1 : (this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"), this.reposition(), a(window).on("resize.colorpicker", a.proxy(this.reposition, this)), !b || this.hasInput() && "color" !== this.input.attr("type") || b.stopPropagation && b.preventDefault && (b.stopPropagation(), b.preventDefault()), !this.component && this.input || this.options.inline !== !1 || a(window.document).on({
                "mousedown.colorpicker": a.proxy(this.hide, this)
            }), void this.element.trigger({
                type: "showPicker",
                color: this.color
            }))
        },
        hide: function() {
            this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"), a(window).off("resize.colorpicker", this.reposition), a(document).off({
                "mousedown.colorpicker": this.hide
            }), this.update(), this.element.trigger({
                type: "hidePicker",
                color: this.color
            })
        },
        updateData: function(a) {
            return a = a || this.color.toString(this.format), this.element.data("color", a), a
        },
        updateInput: function(a) {
            if (a = a || this.color.toString(this.format), this.input !== !1) {
                if (this.options.colorSelectors) {
                    var c = new b(a, this.options.colorSelectors),
                        d = c.toAlias();
                    "undefined" != typeof this.options.colorSelectors[d] && (a = d)
                }
                this.input.prop("value", a)
            }
            return a
        },
        updatePicker: function(a) {
            void 0 !== a && (this.color = new b(a, this.options.colorSelectors));
            var c = this.options.horizontal === !1 ? this.options.sliders : this.options.slidersHorz,
                d = this.picker.find("i");
            return 0 !== d.length ? (this.options.horizontal === !1 ? (c = this.options.sliders, d.eq(1).css("top", c.hue.maxTop * (1 - this.color.value.h)).end().eq(2).css("top", c.alpha.maxTop * (1 - this.color.value.a))) : (c = this.options.slidersHorz, d.eq(1).css("left", c.hue.maxLeft * (1 - this.color.value.h)).end().eq(2).css("left", c.alpha.maxLeft * (1 - this.color.value.a))), d.eq(0).css({
                top: c.saturation.maxTop - this.color.value.b * c.saturation.maxTop,
                left: this.color.value.s * c.saturation.maxLeft
            }), this.picker.find(".colorpicker-saturation").css("backgroundColor", this.color.toHex(this.color.value.h, 1, 1, 1)), this.picker.find(".colorpicker-alpha").css("backgroundColor", this.color.toHex()), this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor", this.color.toString(this.format)), a) : void 0
        },
        updateComponent: function(a) {
            if (a = a || this.color.toString(this.format), this.component !== !1) {
                var b = this.component.find("i").eq(0);
                b.length > 0 ? b.css({
                    backgroundColor: a
                }) : this.component.css({
                    backgroundColor: a
                })
            }
            return a
        },
        update: function(a) {
            var b;
            return this.getValue(!1) === !1 && a !== !0 || (b = this.updateComponent(), this.updateInput(b), this.updateData(b), this.updatePicker()), b
        },
        setValue: function(a) {
            this.color = new b(a, this.options.colorSelectors), this.update(!0), this.element.trigger({
                type: "changeColor",
                color: this.color,
                value: a
            })
        },
        getValue: function(a) {
            a = void 0 === a ? "#000000" : a;
            var b;
            return b = this.hasInput() ? this.input.val() : this.element.data("color"), void 0 !== b && "" !== b && null !== b || (b = a), b
        },
        hasInput: function() {
            return this.input !== !1
        },
        isDisabled: function() {
            return this.hasInput() ? this.input.prop("disabled") === !0 : !1
        },
        disable: function() {
            return this.hasInput() ? (this.input.prop("disabled", !0), this.element.trigger({
                type: "disable",
                color: this.color,
                value: this.getValue()
            }), !0) : !1
        },
        enable: function() {
            return this.hasInput() ? (this.input.prop("disabled", !1), this.element.trigger({
                type: "enable",
                color: this.color,
                value: this.getValue()
            }), !0) : !1
        },
        currentSlider: null,
        mousePointer: {
            left: 0,
            top: 0
        },
        mousedown: function(b) {
            !b.pageX && !b.pageY && b.originalEvent && b.originalEvent.touches && (b.pageX = b.originalEvent.touches[0].pageX, b.pageY = b.originalEvent.touches[0].pageY), b.stopPropagation(), b.preventDefault();
            var c = a(b.target),
                d = c.closest("div"),
                e = this.options.horizontal ? this.options.slidersHorz : this.options.sliders;
            if (!d.is(".colorpicker")) {
                if (d.is(".colorpicker-saturation")) this.currentSlider = a.extend({}, e.saturation);
                else if (d.is(".colorpicker-hue")) this.currentSlider = a.extend({}, e.hue);
                else {
                    if (!d.is(".colorpicker-alpha")) return !1;
                    this.currentSlider = a.extend({}, e.alpha)
                }
                var f = d.offset();
                this.currentSlider.guide = d.find("i")[0].style, this.currentSlider.left = b.pageX - f.left, this.currentSlider.top = b.pageY - f.top, this.mousePointer = {
                    left: b.pageX,
                    top: b.pageY
                }, a(document).on({
                    "mousemove.colorpicker": a.proxy(this.mousemove, this),
                    "touchmove.colorpicker": a.proxy(this.mousemove, this),
                    "mouseup.colorpicker": a.proxy(this.mouseup, this),
                    "touchend.colorpicker": a.proxy(this.mouseup, this)
                }).trigger("mousemove")
            }
            return !1
        },
        mousemove: function(a) {
            !a.pageX && !a.pageY && a.originalEvent && a.originalEvent.touches && (a.pageX = a.originalEvent.touches[0].pageX, a.pageY = a.originalEvent.touches[0].pageY), a.stopPropagation(), a.preventDefault();
            var b = Math.max(0, Math.min(this.currentSlider.maxLeft, this.currentSlider.left + ((a.pageX || this.mousePointer.left) - this.mousePointer.left))),
                c = Math.max(0, Math.min(this.currentSlider.maxTop, this.currentSlider.top + ((a.pageY || this.mousePointer.top) - this.mousePointer.top)));
            return this.currentSlider.guide.left = b + "px", this.currentSlider.guide.top = c + "px", this.currentSlider.callLeft && this.color[this.currentSlider.callLeft].call(this.color, b / this.currentSlider.maxLeft), this.currentSlider.callTop && this.color[this.currentSlider.callTop].call(this.color, c / this.currentSlider.maxTop), "setAlpha" === this.currentSlider.callTop && this.options.format === !1 && (1 !== this.color.value.a ? (this.format = "rgba", this.color.origFormat = "rgba") : (this.format = "hex", this.color.origFormat = "hex")), this.update(!0), this.element.trigger({
                type: "changeColor",
                color: this.color
            }), !1
        },
        mouseup: function(b) {
            return b.stopPropagation(), b.preventDefault(), a(document).off({
                "mousemove.colorpicker": this.mousemove,
                "touchmove.colorpicker": this.mousemove,
                "mouseup.colorpicker": this.mouseup,
                "touchend.colorpicker": this.mouseup
            }), !1
        },
        change: function(a) {
            this.keyup(a)
        },
        keyup: function(a) {
            38 === a.keyCode ? (this.color.value.a < 1 && (this.color.value.a = Math.round(100 * (this.color.value.a + .01)) / 100), this.update(!0)) : 40 === a.keyCode ? (this.color.value.a > 0 && (this.color.value.a = Math.round(100 * (this.color.value.a - .01)) / 100), this.update(!0)) : (this.color = new b(this.input.val(), this.options.colorSelectors), this.color.origFormat && this.options.format === !1 && (this.format = this.color.origFormat), this.getValue(!1) !== !1 && (this.updateData(), this.updateComponent(), this.updatePicker())), this.element.trigger({
                type: "changeColor",
                color: this.color,
                value: this.input.val()
            })
        }
    }, a.colorpicker = d, a.fn.colorpicker = function(b) {
        var c = arguments,
            e = null,
            f = this.each(function() {
                var f = a(this),
                    g = f.data("colorpicker"),
                    h = "object" == typeof b ? b : {};
                g || "string" == typeof b ? "string" == typeof b && (e = g[b].apply(g, Array.prototype.slice.call(c, 1))) : f.data("colorpicker", new d(this, h))
            });
        return "getValue" === b ? e : f
    }, a.fn.colorpicker.constructor = d
}); /*! bootstrap-colorpicker-plus 2016-03-31 */
! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "bootstrap-colorpicker"], a) : window.jQuery && !window.jQuery.fn.colorpickerplus && a(window.jQuery)
}(function(a) {
    var b = ["#5B0F00", "#660000", "#783F04", "#7F6000", "#274E13", "#0C343D", "#1C4587", "#073763", "#20124D", "#4C1130", "#5B0F00", "#660000", "#783F04", "#7F6000", "#274E13", "#0C343D", "#1C4587", "#073763", "#20124D", "#4C1130", "#85200C", "#990000", "#B45F06", "#BF9000", "#38761D", "#134F5C", "#1155CC", "#0B5394", "#351C75", "#741B47", "#A61C00", "#CC0000", "#E69138", "#F1C232", "#6AA84F", "#45818E", "#3C78D8", "#3D85C6", "#674EA7", "#A64D79", "#CC4125", "#E06666", "#F6B26B", "#FFD966", "#93C47D", "#76A5AF", "#6D9EEB", "#6FA8DC", "#8E7CC3", "#C27BA0", "#DD7E6B", "#EA9999", "#F9CB9C", "#FFE599", "#B6D7A8", "#A2C4C9", "#A4C2F4", "#9FC5E8", "#B4A7D6", "#D5A6BD", "#E6B8AF", "#F4CCCC", "#FCE5CD", "#FFF2CC", "#D9EAD3", "#D0E0E3", "#C9DAF8", "#CFE2F3", "#D9D2E9", "#EAD1DC", "#980000", "#FF0000", "#FF9900", "#FFFF00", "#00FF00", "#00FFFF", "#4A86E8", "#0000FF", "#9900FF", "#FF00FF", "#000000", "#222222", "#444444", "#666666", "#888888", "#AAAAAA", "#CCCCCC", "#DDDDDD", "#EEEEEE", "#FFFFFF"],
        c = window.localStorage,
        d = [];
    c && (c.getItem("colorpickerplus_custom_colors") || c.setItem("colorpickerplus_custom_colors", d.join("$")), d = c.getItem("colorpickerplus_custom_colors").split("$"));
    var e = 9,
        f = 10,
        g = function(b, c) {
            return c || (c = a('<div class="colorcell"></div>')), b ? (c.data("color", b), c.css("background-color", b)) : c.addClass("colorpicker-color"), c
        },
        h = function(c) {
            for (var h = a(c), i = Math.max(Math.ceil(d.length / f), 1), j = null, k = 0; i > k; k++) {
                j = a(k === i - 1 ? '<div class="colorpickerplus-custom-colors"></div>' : '<div class="colorpickerplus-colors-row"></div>');
                for (var l = 0; f > l; l++) {
                    var m = k * f + l,
                        n = null;
                    if (0 === m) n = g();
                    else if (m < d.length) {
                        var o = d[m];
                        n = g(o)
                    } else n = a('<div class="nonecell"></div>');
                    n.appendTo(j)
                }
                j.appendTo(h)
            }
            for (k = 0; e > k; k++) {
                j = null, e - 2 > k ? j = a('<div class="colorpickerplus-colors-row"></div>') : (k === e - 2 && a('<div class="colorpickerplus-custom-colors"></div>').appendTo(h), j = a('<div class="colorpickerplus-colors-row"></div>'));
                for (var p = 0; f > p; p++) {
                    var q = b[k * f + p];
                    g(q).appendTo(j)
                }
                j.appendTo(h)
            }
            var r = a('<div class="input-group input-group-sm"><input type="text" class="form-control"/><span class="input-group-btn"><button class="btn btn-default" type="button" title="Custom Color">C</button></span></div>'),
                s = a("input", r);
            r.appendTo(h), h.on("click.colorpickerplus-container", ".colorcell", a.proxy(this.select, this)), r.on("click.colorpickerplus-container", "button", a.proxy(this.custom, this)), s.on("changeColor.colorpickerplus-container", a.proxy(this.change, this)), h.on("click", a.proxy(this.stopPropagation, this)), s.colorpicker(), this.element = c, this.colorInput = s[0]
        };
    h.prototype = {
        constructor: h,
        custom: function() {
            var b = a(this.element),
                e = a(this.colorInput).val();
            d[d.length] = e;
            var f = a(".nonecell", b),
                h = g(e, f.first());
            h.removeClass("nonecell"), h.addClass("colorcell"), c.setItem("colorpickerplus_custom_colors", d.join("$"))
        },
        select: function(b) {
            var c = a(this.element),
                d = a(b.target).data("color");
            if (null == d) c.trigger("changeColor", [d]);
            else {
                var e = a(this.colorInput);
                e.val(d), e.colorpicker("setValue", d), this.update(d)
            }
            c.trigger("select", [d]), a(this.colorInput).colorpicker("hide")
        },
        change: function(b) {
            var c = a(this.element);
            b.stopPropagation(), c.trigger("changeColor", [b.color.toHex()])
        },
        update: function(b) {
            var c = a(this.element),
                d = a(".colorcell", c);
            if (d.removeClass("selected"), null != b) {
                var e = a(this.colorInput);
                e.val(b)
            }
            d.each(function() {
                var c = a(this).data("color");
                return null != b && c === b.toUpperCase() ? (a(this).addClass("selected"), !1) : void 0
            })
        },
        stopPropagation: function(b) {
            var c = a(b.target);
            c.is(".colorcell") || b.stopPropagation()
        }
    }, a.colorpickerembed = h, a.fn.colorpickerembed = function(b) {
        var c = arguments;
        return this.each(function() {
            var d = a(this),
                e = d.data("colorpickerembed"),
                f = "object" == typeof b ? b : {};
            e || "string" == typeof b ? "string" == typeof b && e[b].apply(e, Array.prototype.slice.call(c, 1)) : d.data("colorpickerembed", new h(this, f))
        })
    }, a.fn.colorpickerembed.constructor = h;
    var i = a(".colorpickerplus");
    i.length <= 0 && (i = a('<div class="colorpickerplus"></div>'), i.appendTo(a("body")));
    var j = a('<div class="colorpickerplus-container"></div>').appendTo(i);
    j.colorpickerembed();
    var k = null;
    j.on("changeColor", function(a, b) {
        k && k.setValue(b)
    }), j.on("select", function() {
        k && m()
    });
    var l = function(a) {
            j.data("colorpickerembed").update(a.getValue()), k = a, i.show()
        },
        m = function() {
            i.hide(), k = null
        },
        n = function(b) {
            var c = a(b.element),
                d = c.offset();
            d.top += c.outerHeight(), i.css(d)
        },
        o = {},
        p = function(b, c) {
            var d = a(b);
            this.options = a.extend({}, o, d.data(), c);
            var e = d.is("input") ? d : this.options.input ? d.find(this.options.input) : !1;
            e && 0 === e.length && (e = !1), e !== !1 && (d.on("focus", a.proxy(this.show, this)), this.input = e[0]), e === !1 && d.on("click", a.proxy(this.show, this)), this.element = b
        };
    p.version = "0.1.0", p.prototype = {
        constructor: p,
        destroy: function() {
            var b = a(this.element);
            b.removeData("colorpickerplus").off(".colorpickerplus"), this.input !== !1 && a(this.input).off(".colorpickerplus"), b.trigger("destroy")
        },
        reposition: function() {
            n(this)
        },
        show: function() {
            var b = a(this.element);
            this.reposition(), a(window).on("resize.colorpickerplus", a.proxy(this.reposition, this)), a(window.document.body).on("mouseup.colorpickerplus", a.proxy(this.hide, this)), l(this), b.trigger("showPicker", [this.getValue()])
        },
        hide: function(b) {
            var c = a(this.element),
                d = a(b.target),
                e = d.closest(".colorpicker, .colorpickerplus");
            e.length > 0 || d.is("input") || (m(), a(window).off("resize.colorpickerplus"), a(window.document.body).off("mouseup.colorpickerplus"), c.trigger("hidePicker", [this.getValue()]))
        },
        setValue: function(b) {
            var c = a(this.element);
            b ? c.data("cpp-color", b) : c.removeData("cpp-color"), c.trigger("changeColor", [b])
        },
        getValue: function(b) {
            var c = a(this.element);
            b = void 0 === b ? "#000000" : b;
            var d;
            return d = this.hasInput() ? a(this.input).val() : c.data("cpp-color"), (void 0 === d || "" === d || null === d) && (d = b), "string" == typeof d ? d.toUpperCase() : d
        },
        hasInput: function() {
            return this.input !== !1
        }
    }, a.colorpickerplus = p, a.fn.colorpickerplus = function(b) {
        var c = arguments;
        return this.each(function() {
            var d = a(this),
                e = d.data("colorpickerplus"),
                f = "object" == typeof b ? b : {};
            e || "string" == typeof b ? "string" == typeof b && e[b].apply(e, Array.prototype.slice.call(c, 1)) : d.data("colorpickerplus", new p(this, f))
        })
    }, a.fn.colorpickerplus.constructor = p
}); /*! jh2d-editor v0.1.0 2016-09-01 */
! function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], b) : "undefined" != typeof module && module.exports ? module.exports = b(require("jquery")) : b(window.jQuery)
}(this, function(a) {
    var b = [{
            strokeStyle: "#000",
            lw: 2,
            fillStyle: null,
            text: {
                fill: "#000"
            }
        }, {
            strokeStyle: "#428bca",
            lw: 2,
            fillStyle: null,
            text: {
                fill: "#000"
            }
        }, {
            strokeStyle: "#5cb85c",
            lw: 2,
            fillStyle: null,
            text: {
                fill: "#000"
            }
        }, {
            strokeStyle: "#5bc0de",
            lw: 2,
            fillStyle: null,
            text: {
                fill: "#000"
            }
        }, {
            strokeStyle: "#f0ad4e",
            lw: 2,
            fillStyle: null,
            text: {
                fill: "#000"
            }
        }, {
            strokeStyle: "#d9534f",
            lw: 2,
            fillStyle: null,
            text: {
                fill: "#000"
            }
        }, {
            fillStyle: "#000",
            strokeStyle: "#000",
            lw: 2,
            text: {
                fill: "#fff"
            }
        }, {
            fillStyle: "#428bca",
            strokeStyle: "#2069a8",
            lw: 2,
            text: {
                fill: "#fff"
            }
        }, {
            fillStyle: "#5cb85c",
            strokeStyle: "#2a9529",
            lw: 2,
            text: {
                fill: "#fff"
            }
        }, {
            fillStyle: "#5bc0de",
            strokeStyle: "#17809a",
            lw: 2,
            text: {
                fill: "#fff"
            }
        }, {
            fillStyle: "#f0ad4e",
            strokeStyle: "#a06909",
            lw: 2,
            text: {
                fill: "#fff"
            }
        }, {
            fillStyle: "#d9534f",
            strokeStyle: "#95100a",
            lw: 2,
            text: {
                fill: "#fff"
            }
        }, {
            fillStyle: "#000",
            strokeStyle: "#fff",
            lw: 3,
            text: {
                fill: "#fff"
            },
            shadow: [3, 3, 3]
        }, {
            fillStyle: "#428bca",
            strokeStyle: "#fff",
            lw: 3,
            text: {
                fill: "#fff"
            },
            shadow: [3, 3, 3]
        }, {
            fillStyle: "#5cb85c",
            strokeStyle: "#fff",
            lw: 3,
            text: {
                fill: "#fff"
            },
            shadow: [3, 3, 3]
        }, {
            fillStyle: "#5bc0de",
            strokeStyle: "#fff",
            lw: 3,
            text: {
                fill: "#fff"
            },
            shadow: [3, 3, 3]
        }, {
            fillStyle: "#f0ad4e",
            strokeStyle: "#fff",
            lw: 3,
            text: {
                fill: "#fff"
            },
            shadow: [3, 3, 3]
        }, {
            fillStyle: "#d9534f",
            strokeStyle: "#fff",
            lw: 3,
            text: {
                fill: "#fff"
            },
            shadow: [3, 3, 3]
        }, {
            fillStyle: {
                gd: [0, 0, 0, 100],
                gdc: [5, "#fff", 95, "#aeaeae"]
            },
            shadow: [2, 2, 2],
            strokeStyle: "#000",
            lw: 2,
            text: {
                fill: "#000"
            }
        }, {
            fillStyle: {
                gd: [0, 0, 0, 100],
                gdc: [5, "#c6ffff", 95, "#467fbe"]
            },
            shadow: [2, 2, 2],
            strokeStyle: "#2069a8",
            lw: 2,
            text: {
                fill: "#000"
            }
        }, {
            fillStyle: {
                gd: [0, 0, 0, 100],
                gdc: [5, "#ffffff", 95, "#8fbf8f"]
            },
            shadow: [2, 2, 2],
            strokeStyle: "#2a9529",
            lw: 2,
            text: {
                fill: "#000"
            }
        }, {
            fillStyle: {
                gd: [0, 0, 0, 100],
                gdc: [5, "#dff4ff", 95, "#5fb4bf"]
            },
            shadow: [2, 2, 2],
            strokeStyle: "#17809a",
            lw: 2,
            text: {
                fill: "#000"
            }
        }, {
            fillStyle: {
                gd: [0, 0, 0, 100],
                gdc: [5, "#f4ffcf", 95, "#b4af4f"]
            },
            shadow: [2, 2, 2],
            strokeStyle: "#a06909",
            lw: 2,
            text: {
                fill: "#000"
            }
        }, {
            fillStyle: {
                gd: [0, 0, 0, 100],
                gdc: [5, "#fcd7cf", 95, "#bc574f"]
            },
            shadow: [2, 2, 2],
            strokeStyle: "#95100a",
            lw: 2,
            text: {
                fill: "#000"
            }
        }, {
            fillStyle: {
                gd: [0, 0, 0, 100],
                gdc: [5, "#444", 95, "#000"]
            },
            strokeStyle: "#000",
            lw: 2,
            text: {
                fill: "#fff"
            },
            shadow: [2, 2, 2]
        }, {
            fillStyle: {
                gd: [0, 0, 0, 100],
                gdc: [5, "#82cbfa", 95, "#024b8a"]
            },
            strokeStyle: "#2069a8",
            lw: 2,
            text: {
                fill: "#fff"
            },
            shadow: [2, 2, 2]
        }, {
            fillStyle: {
                gd: [0, 0, 0, 100],
                gdc: [5, "#9cf89c", 95, "#1c881c"]
            },
            strokeStyle: "#2a9529",
            lw: 2,
            text: {
                fill: "#fff"
            },
            shadow: [2, 2, 2]
        }, {
            fillStyle: {
                gd: [0, 0, 0, 100],
                gdc: [5, "#9bf0fe", 95, "#1b80ae"]
            },
            strokeStyle: "#17809a",
            lw: 2,
            text: {
                fill: "#fff"
            },
            shadow: [2, 2, 2]
        }, {
            fillStyle: {
                gd: [0, 0, 0, 100],
                gdc: [5, "#f0ed8e", 95, "#b06d0e"]
            },
            strokeStyle: "#a06909",
            lw: 2,
            text: {
                fill: "#fff"
            },
            shadow: [2, 2, 2]
        }, {
            fillStyle: {
                gd: [0, 0, 0, 100],
                gdc: [5, "#f9938f", 95, "#99130f"]
            },
            strokeStyle: "#95100a",
            lw: 2,
            text: {
                fill: "#fff"
            },
            shadow: [2, 2, 2]
        }],
        c = [
            [4, 0, 3],
            [4, 4, 3],
            [0, 4, 3],
            [-4, 4, 3],
            [-4, 0, 3],
            [-4, -4, 3],
            [0, -4, 3],
            [4, -4, 3],
            [0, 0, 3]
        ],
        d = function(b, c) {
            var d = this,
                e = a(b),
                f = a("canvas", b),
                g = f[0],
                h = a(g),
                i = a(".ctx-menu", b),
                j = a(".style-toolbar", b);
            g.width = e.width() - 18, g.height = 1024, d._el = b, d._opt = c, d._textBox = a(".jh2d-text-box", b)[0], d._ctxMenu = i[0], d._styleToolbar = j.styleToolbar().on("selected", a.proxy(d._styleSelected, d))[0];
            var k = a(".sf-textures", b);
            d.jhe = jh2d.event.create({
                canvas: g,
                pcanvas: f[1],
                pimage: k[0],
                jh2d: jh2d.canvas,
                types: jh2d.types()
            }), d.jhe.on("end", a.proxy(d._end, d)), k.one("load", function() {
                d.jhe.update()
            }).each(function() {
                this.complete && a(this).load()
            }), a(b).on("click", "a[data-jh-cmd], button[data-jh-cmd]", a.proxy(d._cmd, d)), h.on("mouseup", a.proxy(d._mouseup, d)), h.on("contextmenu", a.proxy(d._contextmenu, d))
        };
    d.prototype = {
            constructor: d,
            _cmd: function(d) {
                var e = this,
                    f = e.jhe,
                    g = a(d.currentTarget).data(),
                    h = a(d.currentTarget),
                    i = a(e._ctxMenu),
                    j = g.jhCmd,
                    k = g.param,
                    l = g.opt;
                switch (j) {
                    case "shape":
                        h = a.extend({}, g);
                        var m = h.mode;
                        delete h.jhCmd, delete h.mode, f.mode({
                            type: h,
                            mode: m
                        });
                        break;
                    case "text":
                        f.disabled(!0), f.c.style.cursor = "text", e.which = j;
                        break;
                    case "zoom":
                        var n = f.scale();
                        l ? (n = l > 0 ? Math.floor(10 * n) : Math.ceil(10 * n), n += 10 * k * l, n /= 10) : n = k, f.scale(n);
                        var o = null;
                        o = h.is("a") ? h.closest(".dropdown-menu").siblings(".dropdown-toggle") : h.siblings(".dropdown-toggle"), o.children("span").first().text(Math.ceil(100 * n) + "%");
                        break;
                    case "copystyle":
                        var p = f.selecteds();
                        1 === p.length && (e._copyStyle = jh2d.util.extend({}, p[0], !0, function(a) {
                            return -1 === jh2d.util.inArray(["fillStyle", "strokeStyle", "shadow", "lw", "dashed"], a)
                        }), e.which = j);
                        break;
                    case "quickstyle":
                        var q = b[k];
                        f.style(q), a(e._el).trigger("change");
                        break;
                    case "shadow":
                        var r = null; - 1 !== k && (r = c[k]), f.style({
                            shadow: r
                        }), a(e._el).trigger("change");
                        break;
                    case "alpha":
                        f.style({
                            alpha: k
                        }), a(e._el).trigger("change");
                        break;
                    case "group":
                        f[k](), i.hide(), a(e._el).trigger("change");
                        break;
                    case "layer":
                        f[k](), i.hide(), a(e._el).trigger("change");
                        break;
                    case "align":
                        f.align(k), i.hide(), a(e._el).trigger("change");
                        break;
                    case "edit":
                        e._editText(), i.hide()
                }
            },
            _mouseup: function(b) {
                var c, d, e = this,
                    f = e.which,
                    g = b.originalEvent,
                    h = g.offsetX || g.layerX,
                    i = g.offsetY || g.layerY,
                    j = e.jhe,
                    k = j.c,
                    l = a(k).offset(),
                    m = a(e._textBox);
                switch (h += k.offsetLeft, i += k.offsetTop, f) {
                    case "text":
                        if (e.lastWhich !== f) m.removeAttr("style"), m.css({
                            position: "absolute",
                            display: "block",
                            overflow: "auto",
                            resize: "both",
                            border: "1px solid #ccc",
                            left: h,
                            top: i,
                            zIndex: 200,
                            minHeight: 24
                        }).text("").focus();
                        else {
                            c = m.html();
                            var n = m.offset();
                            if (e._resetTextBox(), "" !== c) {
                                var o = j.scale();
                                c = c.replace(/\n/g, ""), d = {
                                    type: "rect",
                                    x: (n.left - l.left) / o,
                                    y: (n.top - l.top + 4) / o,
                                    w: m.width(),
                                    h: m.height(),
                                    style: 0,
                                    text: c
                                }, j.add(d), j.disabled(!1), a(e._el).trigger("change")
                            }
                        }
                        break;
                    case "texting":
                        var p = j.selecteds();
                        p.length > 0 && (c = m.html(), c = c.replace(/\n/g, ""), d = {
                            text: c
                        }, j.update(d), e._resetTextBox(), j.disabled(!1));
                        break;
                    case "copystyle":
                        j.update(e._copyStyle), a(e._el).trigger("change"), e.which = null
                }
                e.lastWhich = f
            },
            _editText: function() {
                var b = this,
                    c = b.which,
                    d = b.jhe,
                    e = a(b._textBox),
                    f = d.selecteds(),
                    g = a(b._styleToolbar);
                if (1 === f.length) {
                    var h = f[0],
                        i = d.scale(),
                        j = h.x * i,
                        k = h.y * i,
                        l = h.w * i,
                        m = h.h * i,
                        n = h.text;
                    e.css({
                        position: "absolute",
                        display: "block",
                        overflow: "auto",
                        resize: "both",
                        border: "1px solid #ccc",
                        backgroundColor: "#fff",
                        left: j,
                        top: k,
                        minWidth: l,
                        minHeight: m,
                        zIndex: 200
                    }).html("object" == typeof n ? n.text : n), b._placeCaretAtEnd(e[0]), d.update({
                        text: ""
                    }), b.which = "texting", d.disabled(!0), g.hide()
                }
                b.lastWhich = c
            },
            _placeCaretAtEnd: function(a) {
                if ("undefined" != typeof window.getSelection && "undefined" != typeof document.createRange) {
                    var b = document.createRange();
                    b.selectNodeContents(a), b.collapse(!1);
                    var c = window.getSelection();
                    c.removeAllRanges(), c.addRange(b)
                } else if ("undefined" != typeof document.body.createTextRange) {
                    var d = document.body.createTextRange();
                    d.moveToElementText(a), d.collapse(!1), d.select()
                }
            },
            _resetTextBox: function() {
                var b = this,
                    c = b.jhe,
                    d = c.c,
                    e = a(b._textBox);
                delete b.which, delete b.lastWhich, d.style.cursor = "default", e.hide()
            },
            _end: function(b) {
                var c = this,
                    d = c.jhe,
                    e = d.selecteds(),
                    f = a(c._ctxMenu),
                    g = a(c._styleToolbar);
                if (e.length > 0) {
                    var h = e[0],
                        i = d.c,
                        j = i.width,
                        k = h.x,
                        l = h.y,
                        m = h.w,
                        n = h.h,
                        o = jh2d.util.maxRect([k, l], [k + m, l + n]),
                        p = g.width(),
                        q = o[2] + 10,
                        r = o[1];
                    o[0] > j - p - 10 && (q = o[0] - p), g.css({
                        display: "block",
                        left: q,
                        top: r
                    })
                } else g.hide(), f.hide();
                b > 0 && a(c._el).trigger("change", [b])
            },
            _contextmenu: function(b) {
                var c = this,
                    d = b.originalEvent,
                    e = d.offsetX || d.layerX,
                    f = d.offsetY || d.layerY,
                    g = c.jhe,
                    h = a(c._ctxMenu),
                    i = g.selecteds();
                return i.length > 0 ? (a(".dropdown", h).addClass("disabled"), a(".dropup", h).addClass("disabled"), h.css({
                    display: "block",
                    left: e,
                    top: f
                }), i.length > 1 && (a(".dropdown", h).removeClass("disabled"), a(".dropup", h).removeClass("disabled"))) : h.hide(), !1
            },
            _styleSelected: function(a, b) {
                var c = this,
                    d = c.jhe,
                    e = d.selecteds(),
                    f = b.fillStyle;
                if ("object" == typeof f && void 0 !== f.gd)
                    for (var g = 0; g < e.length; g++) {
                        var h, i = e[g],
                            j = f.gdSplit || 2,
                            k = [],
                            l = f.gdReversed ? -1 : 1;
                        "string" == typeof i.fillStyle ? h = i.fillStyle : "object" == typeof i.fillStyle && (h = i.fillStyle.color, !h && jh2d.util.isArray(i.fillStyle.gdc) && (h = i.fillStyle.gdc[1])), h = h || "#ddd";
                        for (var m = 100 / (j - 1), n = 0; j > n; n++) k[k.length] = n * m, k[k.length] = jh2d.util.darkColor(h, n % 2 === 0 ? -64 * l : 64 * l);
                        f.gdc = k, f.color = h
                    }
                d.update(b)
            },
            data: function(b) {
                var c = this,
                    d = c.jhe;
                if ("undefined" == typeof b) return d.data();
                d.data(b), d.update();
                var e = d.scale();
                a("#zoomBtn").children("span").first().text(Math.ceil(100 * e) + "%")
            },
            toDataURL: function(b) {
                var c = this,
                    d = c._el,
                    e = a("canvas", d),
                    f = e[0],
                    g = 5,
                    h = 5,
                    i = jh2d.util.biggestRect(c.data().d),
                    j = i[2] - i[0] + 2 * h,
                    k = i[3] - i[1] + 2 * g,
                    l = c.data().d,
                    m = [];
                "jpg" === b && (m[0] = {
                    type: "rect",
                    style: 1,
                    x: 0,
                    y: 0,
                    w: j,
                    h: k
                });
                for (var n = 0; n < l.length; n++) {
                    var o = l[n],
                        p = m.length;
                    m[p] = jh2d.util.extend({}, o, !1, ["d"]), m[p].x -= i[0] - h, m[p].y -= i[1] - g
                }
                if (e.length > 2) {
                    f = e[2], f.width = j, f.height = k;
                    var q = jh2d.canvas.create({
                        canvas: f,
                        pcanvas: e[1],
                        pimage: a(".sf-textures", d)[0],
                        types: jh2d.types()
                    });
                    q.clear(), q.renderer(m)
                }
                if ("jpg" === b) return f.toDataURL("image/jpeg", .7);
                if ("svg" === b) {
                    var r = jh2d.svg.create().parse({
                            d: m,
                            w: j,
                            h: k
                        }, jh2d.types()),
                        s = "data:image/svg;charset=utf-8," + encodeURIComponent(r);
                    return s
                }
                return f.toDataURL()
            },
            remove: function() {
                var a = this,
                    b = a.jhe;
                b.remove()
            }
        }, a.fn.jh2dEditor = function(b) {
            var c = arguments;
            return this.each(function() {
                var e = a(this),
                    f = e.data("jh2dEditor"),
                    g = "object" == typeof b ? b : {};
                f || "string" == typeof b ? "string" == typeof b && f[b].apply(f, Array.prototype.slice.call(c, 1)) : e.data("jh2dEditor", new d(this, g))
            })
        },
        function() {
            a('div[contenteditable="true"]').keypress(function(a) {
                if (13 !== a.which) return !0;
                var b = document.createDocumentFragment(),
                    c = document.createTextNode("\n");
                b.appendChild(c), c = document.createElement("br"), b.appendChild(c);
                var d = window.getSelection().getRangeAt(0);
                d.deleteContents(), d.insertNode(b), d = document.createRange(), d.setStartAfter(c), d.collapse(!0);
                var e = window.getSelection();
                return e.removeAllRanges(), e.addRange(d), !1
            }), a("ul.dropdown-menu [data-toggle=dropdown]").on("click", function(b) {
                var c = a(this).parent();
                b.preventDefault(), b.stopPropagation(), c.is(".disabled") || (c.is(".open") ? c.removeClass("open") : c.addClass("open"))
            })
        }()
}); /*! jh2d-editor v0.1.0 2016-09-01 */
! function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], b) : "undefined" != typeof module && module.exports ? module.exports = b(require("jquery")) : b(window.jQuery)
}(this, function(a) {
    var b = function(b, c) {
        var d = this;
        d._el = b, d._opt = c, a(".colorpickerplus-dropdown .colorpickerplus-container", b).colorpickerembed().on("changeColor", a.proxy(d._changeColor, d)), a("input[name=fillImage]", b).on("blur", a.proxy(d._selectImage, d)), a(b).on("click", "a", a.proxy(d._select, d))
    };
    b.prototype = {
        constructor: b,
        _select: function(b) {
            var c = this,
                d = a(b.currentTarget),
                e = d.data();
            if (void 0 !== e.gd) c._selectGradient(b);
            else if (e.pattern) c._selectPattern(b);
            else if (!a.isEmptyObject(e)) {
                var f = {};
                for (var g in e) {
                    var h = e[g],
                        i = /(\w+)([A-Z]\w*)/,
                        j = i.exec(g);
                    if (j) {
                        var k = {};
                        k[j[2].toLowerCase()] = h, f[j[1]] = k
                    } else f[g] = h
                }
                a(c._el).trigger("selected", f)
            }
        },
        _changeColor: function(b, c) {
            var d = this,
                e = a(b.target),
                f = e.data("name");
            void 0 === c && (c = "transparent");
            var g = {},
                h = /(\w+)\-(\w+)/i,
                i = h.exec(f);
            if (i) {
                var j = {};
                j[i[2]] = c, g[i[1]] = j
            } else g[f] = c;
            a(d._el).trigger("selected", g)
        },
        _selectPattern: function(b) {
            var c = this,
                d = a(b.currentTarget).data("pattern");
            d && a(c._el).trigger("selected", {
                fillStyle: {
                    p: d
                }
            })
        },
        _selectGradient: function(b) {
            var c = this,
                d = a(b.currentTarget);
            a(c._el).trigger("selected", {
                fillStyle: d.data()
            })
        },
        _selectImage: function(b) {
            var c = this,
                d = a(b.target).val();
            /^((http|https):)?\/\//.test(d) && a(c._el).trigger("selected", ["fillStyle", {
                url: d
            }])
        }
    }, a.fn.styleToolbar = function(c) {
        var d = arguments;
        return this.each(function() {
            var e = a(this),
                f = e.data("styleToolbar"),
                g = "object" == typeof c ? c : {};
            f || "string" == typeof c ? "string" == typeof c && f[c].apply(f, Array.prototype.slice.call(d, 1)) : e.data("styleToolbar", new b(this, g))
        })
    }
}); /*! shapefly-diagram v0.1.0 2016-09-01 */
! function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], b) : "undefined" != typeof module && module.exports ? module.exports = b(require("jquery")) : b(window.jQuery)
}(this, function(a) {
    var b = function(b, c) {
        var d = this;
        d._el = b, d._opt = c, d._adapter = a(".jh2d-editor", b).ntadapter({
            data: a.proxy(d._data, d)
        }).jh2dEditor(c).on("change", a.proxy(d._change, d)), a(b).notes({
            id: "_jh2d",
            adapter: d._adapter,
            suffix: "sfd",
            mime: "text/json",
            msgbox: c.msgbox,
            saveData: function(a) {
                var b = a.d,
                    c = a.g,
                    d = [],
                    e = [],
                    f = 0,
                    g = null;
                for (f = 0; f < b.length; f++) {
                    var h = b[f];
                    d[d.length] = jh2d.util.extend({}, h, !1, ["d"])
                }
                for (f = 0; f < c.length; f++) {
                    var i = c[f];
                    e[e.length] = jh2d.util.extend({}, i, !1, ["d"])
                }
                return g = jh2d.util.extend({
                    d: d,
                    g: e
                }, a)
            }
        }).on("cmd.nts", a.proxy(d._cmd, d)), Mousetrap.bind(["command+p", "ctrl+p"], a.proxy(d.print, d)), Mousetrap.bind(["del"], a.proxy(d._delete, d))
    };
    b.prototype = {
        constructor: b,
        _change: function() {
            var b = this,
                c = a(b._adapter),
                d = c.data("jh2dEditor");
            c.trigger("edit.ntadapter", d.data())
        },
        _data: function(b) {
            var c = this,
                d = a(c._adapter).data("jh2dEditor");
            return "undefined" == typeof b ? d.data() : void d.data("undefined" == typeof b.d ? {} : b.d)
        },
        _cmd: function(b, c) {
            var d = this,
                e = a(d._el),
                f = e.data("notes"),
                g = a(c),
                h = g.data(),
                i = h.ntsCmd,
                j = h.param,
                k = a(d._adapter),
                l = k.data("jh2dEditor");
            switch (i) {
                case "print":
                    d.print();
                    break;
                case "export":
                    var m = l.toDataURL(j),
                        n = f.activeFile();
                    f.saveAs(m, n.name.replace(/([^\.]+)(\.\w+)?/i, "$1." + j), "image/*")
            }
        },
        _delete: function() {
            var b = this,
                c = a(b._adapter),
                d = c.data("jh2dEditor");
            return d.remove(), !1
        },
        print: function() {
            return window.print(), !1
        },
        resize: function() {
            var b = this,
                c = a(b._el),
                d = c.height(),
                e = a(".jh2d-editor", c),
                f = a(".jh2d-canvas", c);
            e.height(d - 72), f.height(d - 72 - 32)
        }
    }, a.fn.shapeflyDiagram = function(c) {
        var d = arguments;
        return this.each(function() {
            var e = a(this),
                f = e.data("shapeflyDiagram"),
                g = "object" == typeof c ? c : {};
            f || "string" == typeof c ? "string" == typeof c && f[c].apply(f, Array.prototype.slice.call(d, 1)) : e.data("shapeflyDiagram", new b(this, g))
        })
    }
}), $(document).ready(function() {
    var a = $(".notes").shapeflyDiagram({
            msgbox: $("#myMsgBox").msgbox()[0]
        }),
        b = $(window).on("resize", function() {
            a.shapeflyDiagram("resize")
        });
    "undefined" != typeof chrome && chrome.storage || b.bind("beforeunload", function() {
        return window.localStorage ? void a.notes("save2LocalStore") : "Do you really want to close?"
    }), a.shapeflyDiagram("resize")
});