(function(){window.AA={}}).call(this),function(){window.AA.CheckboxToggler=AA.CheckboxToggler=function(){function e(e,t){var n;this.options=e,this.container=t,n={},this.options=$.extend({},n,e),this._init(),this._bind()}return e.prototype._init=function(){if(!this.container)throw new Error("Container element not found");this.$container=$(this.container);if(!this.$container.find(".toggle_all").length)throw new Error('"toggle all" checkbox not found');return this.toggle_all_checkbox=this.$container.find(".toggle_all"),this.checkboxes=this.$container.find(":checkbox").not(this.toggle_all_checkbox)},e.prototype._bind=function(){var e=this;return this.checkboxes.change(function(t){return e._didChangeCheckbox(t.target)}),this.toggle_all_checkbox.change(function(){return e._didChangeToggleAllCheckbox()})},e.prototype._didChangeCheckbox=function(e){switch(this.checkboxes.filter(":checked").length){case this.checkboxes.length-1:return this.toggle_all_checkbox.prop({checked:null});case this.checkboxes.length:return this.toggle_all_checkbox.prop({checked:!0})}},e.prototype._didChangeToggleAllCheckbox=function(){var e,t=this;return e=this.toggle_all_checkbox.prop("checked")?!0:null,this.checkboxes.each(function(n,r){return $(r).prop({checked:e}),t._didChangeCheckbox(r)})},e}(),jQuery(function(e){return e.widget.bridge("checkboxToggler",AA.CheckboxToggler)})}.call(this),function(){window.AA.DropdownMenu=AA.DropdownMenu=function(){function e(e,t){var n;this.options=e,this.element=t,this.$element=$(this.element),n={fadeInDuration:20,fadeOutDuration:100,onClickActionItemCallback:null},this.options=$.extend({},n,e),this.$menuButton=this.$element.find(".dropdown_menu_button"),this.$menuList=this.$element.find(".dropdown_menu_list_wrapper"),this.isOpen=!1,this._buildMenuList(),this._bind()}return e.prototype.open=function(){return this.isOpen=!0,this.$menuList.fadeIn(this.options.fadeInDuration),this._positionMenuList(),this._positionNipple(),this},e.prototype.close=function(){return this.isOpen=!1,this.$menuList.fadeOut(this.options.fadeOutDuration),this},e.prototype.destroy=function(){return this.$element.unbind(),this.$element=null,this},e.prototype.isDisabled=function(){return this.$menuButton.hasClass("disabled")},e.prototype.disable=function(){return this.$menuButton.addClass("disabled")},e.prototype.enable=function(){return this.$menuButton.removeClass("disabled")},e.prototype.option=function(e,t){return $.isPlainObject(e)?this.options=$.extend(!0,this.options,e):e!=null?this.options[e]:this.options[e]=t},e.prototype._buildMenuList=function(){return this.$menuList.prepend('<div class="dropdown_menu_nipple"></div>'),this.$menuList.hide()},e.prototype._bind=function(){var e=this;return $("body").bind("click",function(){if(e.isOpen===!0)return e.close()}),this.$menuButton.bind("click",function(){return e.isDisabled()||(e.isOpen===!0?e.close():e.open()),!1})},e.prototype._positionMenuList=function(){var e,t,n;return e=this.$menuButton.position().left+this.$menuButton.outerWidth()/2,t=this.$menuList.outerWidth()/2,n=e-t,this.$menuList.css("left",n)},e.prototype._positionNipple=function(){var e,t,n,r,i;return n=this.$menuList.outerWidth()/2,t=this.$menuButton.position().top+this.$menuButton.outerHeight()+10,this.$menuList.css("top",t),e=this.$menuList.find(".dropdown_menu_nipple"),r=e.outerWidth()/2,i=n-r,e.css("left",i)},e}(),function(e){return e.widget.bridge("aaDropdownMenu",AA.DropdownMenu),e(function(){return e(".dropdown_menu").aaDropdownMenu()})}(jQuery)}.call(this),function(){window.AA.Popover=AA.Popover=function(){function e(e,t){var n;this.options=e,this.element=t,this.$element=$(this.element),n={fadeInDuration:20,fadeOutDuration:100,autoOpen:!0,pageWrapperElement:"#wrapper",onClickActionItemCallback:null},this.options=$.extend({},n,e),this.$popover=null,this.isOpen=!1,$(this.$element.attr("href")).length>0?this.$popover=$(this.$element.attr("href")):this.$popover=this.$element.next(".popover"),this._buildPopover(),this._bind()}return e.prototype.open=function(){return this.isOpen=!0,this.$popover.fadeIn(this.options.fadeInDuration),this._positionPopover(),this._positionNipple(),this},e.prototype.close=function(){return this.isOpen=!1,this.$popover.fadeOut(this.options.fadeOutDuration),this},e.prototype.destroy=function(){return this.$element.removeData("popover"),this.$element.unbind(),this.$element=null,this},e.prototype.option=function(){},e.prototype._buildPopover=function(){return this.$popover.prepend('<div class="popover_nipple"></div>'),this.$popover.hide(),this.$popover.addClass("popover")},e.prototype._bind=function(){var e=this;$(this.options.pageWrapperElement).bind("click",function(t){if(e.isOpen===!0)return e.close()});if(this.options.autoOpen===!0)return this.$element.bind("click",function(){return e.isOpen===!0?e.close():e.open(),!1})},e.prototype._positionPopover=function(){var e,t,n;return e=this.$element.offset().left+this.$element.outerWidth()/2,t=this.$popover.outerWidth()/2,n=e-t,this.$popover.css("left",n)},e.prototype._positionNipple=function(){var e,t,n,r,i;return n=this.$popover.outerWidth()/2,t=this.$element.offset().top+this.$element.outerHeight()+10,this.$popover.css("top",t),e=this.$popover.find(".popover_nipple"),r=e.outerWidth()/2,i=n-r,e.css("left",i)},e}(),function(e){return e.widget.bridge("popover",AA.Popover)}(jQuery)}.call(this),function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};window.AA.TableCheckboxToggler=AA.TableCheckboxToggler=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype._init=function(){return n.__super__._init.apply(this,arguments)},n.prototype._bind=function(){var e=this;return n.__super__._bind.apply(this,arguments),this.$container.find("tbody td").click(function(t){if(t.target.type!=="checkbox")return e._didClickCell(t.target)})},n.prototype._didChangeCheckbox=function(e){var t;return n.__super__._didChangeCheckbox.apply(this,arguments),t=$(e).parents("tr"),e.checked?t.addClass("selected"):t.removeClass("selected")},n.prototype._didClickCell=function(e){return $(e).parent("tr").find(":checkbox").click()},n}(AA.CheckboxToggler),jQuery(function(e){return e.widget.bridge("tableCheckboxToggler",AA.TableCheckboxToggler)})}.call(this),function(){$(function(){return $(document).on("focus",".datepicker:not(.hasDatepicker)",function(){return $(this).datepicker({dateFormat:"yy-mm-dd"})}),$(".clear_filters_btn").click(function(){return window.location.search=""}),$(".dropdown_button").popover(),$("#q_search").submit(function(){return $(this).find(":input").filter(function(){return this.value===""}).prop("disabled",!0)})})}.call(this),function(){jQuery(function(e){e(document).delegate("#batch_actions_selector li a","click.rails",function(){return e("#batch_action").val(e(this).attr("data-action")),e("#collection_selection").submit()});if(e("#batch_actions_selector").length&&e(":checkbox.toggle_all").length)return e(".paginated_collection table.index_table").length?e(".paginated_collection table.index_table").tableCheckboxToggler():e(".paginated_collection").checkboxToggler(),e(".paginated_collection").find(":checkbox").bind("change",function(){return e(".paginated_collection").find(":checkbox").filter(":checked").length>0?e("#batch_actions_selector").aaDropdownMenu("enable"):e("#batch_actions_selector").aaDropdownMenu("disable")})})}.call(this);