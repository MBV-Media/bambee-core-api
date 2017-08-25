
window.projectVersion = '1.4.1';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:MBVMedia" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="MBVMedia.html">MBVMedia</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:MBVMedia_ControlledTemplate" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="MBVMedia/ControlledTemplate.html">ControlledTemplate</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:MBVMedia_ControlledTemplate_ControlledTemplate" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/ControlledTemplate/ControlledTemplate.html">ControlledTemplate</a>                    </div>                </li>                            <li data-name="class:MBVMedia_ControlledTemplate_CookieControlledTemplate" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/ControlledTemplate/CookieControlledTemplate.html">CookieControlledTemplate</a>                    </div>                </li>                            <li data-name="class:MBVMedia_ControlledTemplate_SessionControlledTemplate" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/ControlledTemplate/SessionControlledTemplate.html">SessionControlledTemplate</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:MBVMedia_Lib" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="MBVMedia/Lib.html">Lib</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:MBVMedia_Lib_Cookie" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/Lib/Cookie.html">Cookie</a>                    </div>                </li>                            <li data-name="class:MBVMedia_Lib_Session" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/Lib/Session.html">Session</a>                    </div>                </li>                            <li data-name="class:MBVMedia_Lib_Singleton" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/Lib/Singleton.html">Singleton</a>                    </div>                </li>                            <li data-name="class:MBVMedia_Lib_ThemeView" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/Lib/ThemeView.html">ThemeView</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:MBVMedia_MetaBox" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="MBVMedia/MetaBox.html">MetaBox</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:MBVMedia_MetaBox_MetaBox" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/MetaBox/MetaBox.html">MetaBox</a>                    </div>                </li>                            <li data-name="class:MBVMedia_MetaBox_MetaKey" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/MetaBox/MetaKey.html">MetaKey</a>                    </div>                </li>                            <li data-name="class:MBVMedia_MetaBox_MetaKeyCheckbox" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/MetaBox/MetaKeyCheckbox.html">MetaKeyCheckbox</a>                    </div>                </li>                            <li data-name="class:MBVMedia_MetaBox_MetaKeyChoice" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/MetaBox/MetaKeyChoice.html">MetaKeyChoice</a>                    </div>                </li>                            <li data-name="class:MBVMedia_MetaBox_MetaKeyColorPicker" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/MetaBox/MetaKeyColorPicker.html">MetaKeyColorPicker</a>                    </div>                </li>                            <li data-name="class:MBVMedia_MetaBox_MetaKeyMedia" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/MetaBox/MetaKeyMedia.html">MetaKeyMedia</a>                    </div>                </li>                            <li data-name="class:MBVMedia_MetaBox_MetaKeyTaxonomy" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/MetaBox/MetaKeyTaxonomy.html">MetaKeyTaxonomy</a>                    </div>                </li>                            <li data-name="class:MBVMedia_MetaBox_MetaKeyTextarea" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/MetaBox/MetaKeyTextarea.html">MetaKeyTextarea</a>                    </div>                </li>                            <li data-name="class:MBVMedia_MetaBox_MetaKeyTextfield" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/MetaBox/MetaKeyTextfield.html">MetaKeyTextfield</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:MBVMedia_Shortcode" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="MBVMedia/Shortcode.html">Shortcode</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:MBVMedia_Shortcode_Lib" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="MBVMedia/Shortcode/Lib.html">Lib</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:MBVMedia_Shortcode_Lib_BambeeShortcode" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="MBVMedia/Shortcode/Lib/BambeeShortcode.html">BambeeShortcode</a>                    </div>                </li>                            <li data-name="class:MBVMedia_Shortcode_Lib_Handleable" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="MBVMedia/Shortcode/Lib/Handleable.html">Handleable</a>                    </div>                </li>                            <li data-name="class:MBVMedia_Shortcode_Lib_ShortcodeManager" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="MBVMedia/Shortcode/Lib/ShortcodeManager.html">ShortcodeManager</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:MBVMedia_Shortcode_AspectRatio" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/Shortcode/AspectRatio.html">AspectRatio</a>                    </div>                </li>                            <li data-name="class:MBVMedia_Shortcode_Col" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/Shortcode/Col.html">Col</a>                    </div>                </li>                            <li data-name="class:MBVMedia_Shortcode_CoreData" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/Shortcode/CoreData.html">CoreData</a>                    </div>                </li>                            <li data-name="class:MBVMedia_Shortcode_PageLink" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/Shortcode/PageLink.html">PageLink</a>                    </div>                </li>                            <li data-name="class:MBVMedia_Shortcode_Row" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/Shortcode/Row.html">Row</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:MBVMedia_ThemeCustomizer" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="MBVMedia/ThemeCustomizer.html">ThemeCustomizer</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:MBVMedia_ThemeCustomizer_Control" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/ThemeCustomizer/Control.html">Control</a>                    </div>                </li>                            <li data-name="class:MBVMedia_ThemeCustomizer_Panel" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/ThemeCustomizer/Panel.html">Panel</a>                    </div>                </li>                            <li data-name="class:MBVMedia_ThemeCustomizer_Section" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/ThemeCustomizer/Section.html">Section</a>                    </div>                </li>                            <li data-name="class:MBVMedia_ThemeCustomizer_Setting" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/ThemeCustomizer/Setting.html">Setting</a>                    </div>                </li>                            <li data-name="class:MBVMedia_ThemeCustomizer_ThemeCustommizer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/ThemeCustomizer/ThemeCustommizer.html">ThemeCustommizer</a>                    </div>                </li>                            <li data-name="class:MBVMedia_ThemeCustomizer_ThemeCustommizerElement" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="MBVMedia/ThemeCustomizer/ThemeCustommizerElement.html">ThemeCustommizerElement</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:MBVMedia_Bambee" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="MBVMedia/Bambee.html">Bambee</a>                    </div>                </li>                            <li data-name="class:MBVMedia_BambeeAdmin" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="MBVMedia/BambeeAdmin.html">BambeeAdmin</a>                    </div>                </li>                            <li data-name="class:MBVMedia_BambeeBase" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="MBVMedia/BambeeBase.html">BambeeBase</a>                    </div>                </li>                            <li data-name="class:MBVMedia_BambeeWalkerComment" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="MBVMedia/BambeeWalkerComment.html">BambeeWalkerComment</a>                    </div>                </li>                            <li data-name="class:MBVMedia_BambeeWebsite" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="MBVMedia/BambeeWebsite.html">BambeeWebsite</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "MBVMedia.html", "name": "MBVMedia", "doc": "Namespace MBVMedia"},{"type": "Namespace", "link": "MBVMedia/Shortcode.html", "name": "MBVMedia\\Shortcode", "doc": "Namespace MBVMedia\\Shortcode"},{"type": "Namespace", "link": "MBVMedia/Shortcode/Lib.html", "name": "MBVMedia\\Shortcode\\Lib", "doc": "Namespace MBVMedia\\Shortcode\\Lib"},
            {"type": "Interface", "fromName": "MBVMedia\\Shortcode\\Lib", "fromLink": "MBVMedia/Shortcode/Lib.html", "link": "MBVMedia/Shortcode/Lib/Handleable.html", "name": "MBVMedia\\Shortcode\\Lib\\Handleable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Lib\\Handleable", "fromLink": "MBVMedia/Shortcode/Lib/Handleable.html", "link": "MBVMedia/Shortcode/Lib/Handleable.html#method_handleShortcode", "name": "MBVMedia\\Shortcode\\Lib\\Handleable::handleShortcode", "doc": "&quot;&quot;"},
            
            
            {"type": "Class", "fromName": "MBVMedia", "fromLink": "MBVMedia.html", "link": "MBVMedia/Bambee.html", "name": "MBVMedia\\Bambee", "doc": "&quot;The class representing both website (user frontend) and WordPress admin.&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\Bambee", "fromLink": "MBVMedia/Bambee.html", "link": "MBVMedia/Bambee.html#method___construct", "name": "MBVMedia\\Bambee::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Bambee", "fromLink": "MBVMedia/Bambee.html", "link": "MBVMedia/Bambee.html#method_addActions", "name": "MBVMedia\\Bambee::addActions", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Bambee", "fromLink": "MBVMedia/Bambee.html", "link": "MBVMedia/Bambee.html#method_addFilters", "name": "MBVMedia\\Bambee::addFilters", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Bambee", "fromLink": "MBVMedia/Bambee.html", "link": "MBVMedia/Bambee.html#method_actionAfterSetupTheme", "name": "MBVMedia\\Bambee::actionAfterSetupTheme", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Bambee", "fromLink": "MBVMedia/Bambee.html", "link": "MBVMedia/Bambee.html#method_getShortcodeManager", "name": "MBVMedia\\Bambee::getShortcodeManager", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Bambee", "fromLink": "MBVMedia/Bambee.html", "link": "MBVMedia/Bambee.html#method_setPostThumbnailWidth", "name": "MBVMedia\\Bambee::setPostThumbnailWidth", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Bambee", "fromLink": "MBVMedia/Bambee.html", "link": "MBVMedia/Bambee.html#method_setPostThumbnailHeight", "name": "MBVMedia\\Bambee::setPostThumbnailHeight", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Bambee", "fromLink": "MBVMedia/Bambee.html", "link": "MBVMedia/Bambee.html#method_setPostThumbnailCrop", "name": "MBVMedia\\Bambee::setPostThumbnailCrop", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Bambee", "fromLink": "MBVMedia/Bambee.html", "link": "MBVMedia/Bambee.html#method_addMenu", "name": "MBVMedia\\Bambee::addMenu", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Bambee", "fromLink": "MBVMedia/Bambee.html", "link": "MBVMedia/Bambee.html#method_registerMenus", "name": "MBVMedia\\Bambee::registerMenus", "doc": "&quot;Register menus.&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Bambee", "fromLink": "MBVMedia/Bambee.html", "link": "MBVMedia/Bambee.html#method_addPostType", "name": "MBVMedia\\Bambee::addPostType", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Bambee", "fromLink": "MBVMedia/Bambee.html", "link": "MBVMedia/Bambee.html#method_registerPostTypes", "name": "MBVMedia\\Bambee::registerPostTypes", "doc": "&quot;Register post types.&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Bambee", "fromLink": "MBVMedia/Bambee.html", "link": "MBVMedia/Bambee.html#method_getComponentUrl", "name": "MBVMedia\\Bambee::getComponentUrl", "doc": "&quot;Returns url to compentents of bambee&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Bambee", "fromLink": "MBVMedia/Bambee.html", "link": "MBVMedia/Bambee.html#method_loadThemeTextdomain", "name": "MBVMedia\\Bambee::loadThemeTextdomain", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Bambee", "fromLink": "MBVMedia/Bambee.html", "link": "MBVMedia/Bambee.html#method_addThemeSupportPostThumbnails", "name": "MBVMedia\\Bambee::addThemeSupportPostThumbnails", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Bambee", "fromLink": "MBVMedia/Bambee.html", "link": "MBVMedia/Bambee.html#method_addThemeSupportCustomLogo", "name": "MBVMedia\\Bambee::addThemeSupportCustomLogo", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Bambee", "fromLink": "MBVMedia/Bambee.html", "link": "MBVMedia/Bambee.html#method_addThemeSupportCustomHeader", "name": "MBVMedia\\Bambee::addThemeSupportCustomHeader", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Bambee", "fromLink": "MBVMedia/Bambee.html", "link": "MBVMedia/Bambee.html#method_addPostTypeSupportExcerpt", "name": "MBVMedia\\Bambee::addPostTypeSupportExcerpt", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "MBVMedia", "fromLink": "MBVMedia.html", "link": "MBVMedia/BambeeAdmin.html", "name": "MBVMedia\\BambeeAdmin", "doc": "&quot;The class representing the WordPress Admin.&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\BambeeAdmin", "fromLink": "MBVMedia/BambeeAdmin.html", "link": "MBVMedia/BambeeAdmin.html#method___construct", "name": "MBVMedia\\BambeeAdmin::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeAdmin", "fromLink": "MBVMedia/BambeeAdmin.html", "link": "MBVMedia/BambeeAdmin.html#method_addActions", "name": "MBVMedia\\BambeeAdmin::addActions", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeAdmin", "fromLink": "MBVMedia/BambeeAdmin.html", "link": "MBVMedia/BambeeAdmin.html#method_addFilters", "name": "MBVMedia\\BambeeAdmin::addFilters", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeAdmin", "fromLink": "MBVMedia/BambeeAdmin.html", "link": "MBVMedia/BambeeAdmin.html#method_setupCoreDataPage", "name": "MBVMedia\\BambeeAdmin::setupCoreDataPage", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeAdmin", "fromLink": "MBVMedia/BambeeAdmin.html", "link": "MBVMedia/BambeeAdmin.html#method_getBambee", "name": "MBVMedia\\BambeeAdmin::getBambee", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeAdmin", "fromLink": "MBVMedia/BambeeAdmin.html", "link": "MBVMedia/BambeeAdmin.html#method_getCoreDataPage", "name": "MBVMedia\\BambeeAdmin::getCoreDataPage", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeAdmin", "fromLink": "MBVMedia/BambeeAdmin.html", "link": "MBVMedia/BambeeAdmin.html#method_setCoreDataPage", "name": "MBVMedia\\BambeeAdmin::setCoreDataPage", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeAdmin", "fromLink": "MBVMedia/BambeeAdmin.html", "link": "MBVMedia/BambeeAdmin.html#method_getGlobalDataPage", "name": "MBVMedia\\BambeeAdmin::getGlobalDataPage", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeAdmin", "fromLink": "MBVMedia/BambeeAdmin.html", "link": "MBVMedia/BambeeAdmin.html#method_setGlobalDataPage", "name": "MBVMedia\\BambeeAdmin::setGlobalDataPage", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeAdmin", "fromLink": "MBVMedia/BambeeAdmin.html", "link": "MBVMedia/BambeeAdmin.html#method_setPostPerPageLimit", "name": "MBVMedia\\BambeeAdmin::setPostPerPageLimit", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeAdmin", "fromLink": "MBVMedia/BambeeAdmin.html", "link": "MBVMedia/BambeeAdmin.html#method_enqueueStyles", "name": "MBVMedia\\BambeeAdmin::enqueueStyles", "doc": "&quot;Enqueue the CSS.&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeAdmin", "fromLink": "MBVMedia/BambeeAdmin.html", "link": "MBVMedia/BambeeAdmin.html#method_addSvgMediaSupport", "name": "MBVMedia\\BambeeAdmin::addSvgMediaSupport", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeAdmin", "fromLink": "MBVMedia/BambeeAdmin.html", "link": "MBVMedia/BambeeAdmin.html#method_displaySvgThumbs", "name": "MBVMedia\\BambeeAdmin::displaySvgThumbs", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeAdmin", "fromLink": "MBVMedia/BambeeAdmin.html", "link": "MBVMedia/BambeeAdmin.html#method_svgThumbsFilter", "name": "MBVMedia\\BambeeAdmin::svgThumbsFilter", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeAdmin", "fromLink": "MBVMedia/BambeeAdmin.html", "link": "MBVMedia/BambeeAdmin.html#method_svgFinalOutput", "name": "MBVMedia\\BambeeAdmin::svgFinalOutput", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeAdmin", "fromLink": "MBVMedia/BambeeAdmin.html", "link": "MBVMedia/BambeeAdmin.html#method_modifyPostPerPageLimit", "name": "MBVMedia\\BambeeAdmin::modifyPostPerPageLimit", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "MBVMedia", "fromLink": "MBVMedia.html", "link": "MBVMedia/BambeeBase.html", "name": "MBVMedia\\BambeeBase", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\BambeeBase", "fromLink": "MBVMedia/BambeeBase.html", "link": "MBVMedia/BambeeBase.html#method_addActions", "name": "MBVMedia\\BambeeBase::addActions", "doc": "&quot;This is the place where Wordpress actions should be added.&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeBase", "fromLink": "MBVMedia/BambeeBase.html", "link": "MBVMedia/BambeeBase.html#method_addFilters", "name": "MBVMedia\\BambeeBase::addFilters", "doc": "&quot;This is the place where Wordpress filters should be added.&quot;"},
            
            {"type": "Class", "fromName": "MBVMedia", "fromLink": "MBVMedia.html", "link": "MBVMedia/BambeeWalkerComment.html", "name": "MBVMedia\\BambeeWalkerComment", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\BambeeWalkerComment", "fromLink": "MBVMedia/BambeeWalkerComment.html", "link": "MBVMedia/BambeeWalkerComment.html#method_paged_walk", "name": "MBVMedia\\BambeeWalkerComment::paged_walk", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "MBVMedia", "fromLink": "MBVMedia.html", "link": "MBVMedia/BambeeWebsite.html", "name": "MBVMedia\\BambeeWebsite", "doc": "&quot;The class representing the website (user frontend).&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method___construct", "name": "MBVMedia\\BambeeWebsite::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_getBambee", "name": "MBVMedia\\BambeeWebsite::getBambee", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_getCoreData", "name": "MBVMedia\\BambeeWebsite::getCoreData", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_getGlobalData", "name": "MBVMedia\\BambeeWebsite::getGlobalData", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_getCommentPaginationNextText", "name": "MBVMedia\\BambeeWebsite::getCommentPaginationNextText", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_setCommentPaginationNextText", "name": "MBVMedia\\BambeeWebsite::setCommentPaginationNextText", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_getCommentPaginationPrevText", "name": "MBVMedia\\BambeeWebsite::getCommentPaginationPrevText", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_setCommentPaginationPrevText", "name": "MBVMedia\\BambeeWebsite::setCommentPaginationPrevText", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_getCommentPaginationPageTemplate", "name": "MBVMedia\\BambeeWebsite::getCommentPaginationPageTemplate", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_setCommentPaginationPageTemplate", "name": "MBVMedia\\BambeeWebsite::setCommentPaginationPageTemplate", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_addActions", "name": "MBVMedia\\BambeeWebsite::addActions", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_addFilters", "name": "MBVMedia\\BambeeWebsite::addFilters", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_addScripts", "name": "MBVMedia\\BambeeWebsite::addScripts", "doc": "&quot;Enqueue additional scripts&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_addStyles", "name": "MBVMedia\\BambeeWebsite::addStyles", "doc": "&quot;Enqueue additional styles&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_addScript", "name": "MBVMedia\\BambeeWebsite::addScript", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_addLocalizedScript", "name": "MBVMedia\\BambeeWebsite::addLocalizedScript", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_addStyle", "name": "MBVMedia\\BambeeWebsite::addStyle", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_disableEmojis", "name": "MBVMedia\\BambeeWebsite::disableEmojis", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_commentList", "name": "MBVMedia\\BambeeWebsite::commentList", "doc": "&quot;Customize the comment list.&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_getCommentList", "name": "MBVMedia\\BambeeWebsite::getCommentList", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_commentPagination", "name": "MBVMedia\\BambeeWebsite::commentPagination", "doc": "&quot;Display comments pagination.&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_getCommentPagination", "name": "MBVMedia\\BambeeWebsite::getCommentPagination", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_addCF7DefaultRecipient", "name": "MBVMedia\\BambeeWebsite::addCF7DefaultRecipient", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_enqueueScripts", "name": "MBVMedia\\BambeeWebsite::enqueueScripts", "doc": "&quot;Enqueue all added JS files.&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_enqueueLocalizeScripts", "name": "MBVMedia\\BambeeWebsite::enqueueLocalizeScripts", "doc": "&quot;Enqueue all added localize JS files.&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_enqueueStyles", "name": "MBVMedia\\BambeeWebsite::enqueueStyles", "doc": "&quot;Enqueue all added CSS files.&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\BambeeWebsite", "fromLink": "MBVMedia/BambeeWebsite.html", "link": "MBVMedia/BambeeWebsite.html#method_printGoogleAnalyticsCode", "name": "MBVMedia\\BambeeWebsite::printGoogleAnalyticsCode", "doc": "&quot;Prints the Google Analytics code if a tracking code is set.&quot;"},
            
            {"type": "Class", "fromName": "MBVMedia", "fromLink": "MBVMedia.html", "link": "MBVMedia/Entrance.html", "name": "MBVMedia\\Entrance", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\Entrance", "fromLink": "MBVMedia/Entrance.html", "link": "MBVMedia/Entrance.html#method___construct", "name": "MBVMedia\\Entrance::__construct", "doc": "&quot;Entrance constructor.&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Entrance", "fromLink": "MBVMedia/Entrance.html", "link": "MBVMedia/Entrance.html#method_addWebsiteActions", "name": "MBVMedia\\Entrance::addWebsiteActions", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Entrance", "fromLink": "MBVMedia/Entrance.html", "link": "MBVMedia/Entrance.html#method_addAdminActions", "name": "MBVMedia\\Entrance::addAdminActions", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Entrance", "fromLink": "MBVMedia/Entrance.html", "link": "MBVMedia/Entrance.html#method_startSession", "name": "MBVMedia\\Entrance::startSession", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Entrance", "fromLink": "MBVMedia/Entrance.html", "link": "MBVMedia/Entrance.html#method_ajaxCallback", "name": "MBVMedia\\Entrance::ajaxCallback", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Entrance", "fromLink": "MBVMedia/Entrance.html", "link": "MBVMedia/Entrance.html#method_renderTemplate", "name": "MBVMedia\\Entrance::renderTemplate", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Entrance", "fromLink": "MBVMedia/Entrance.html", "link": "MBVMedia/Entrance.html#method_printScript", "name": "MBVMedia\\Entrance::printScript", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "MBVMedia", "fromLink": "MBVMedia.html", "link": "MBVMedia/Session.html", "name": "MBVMedia\\Session", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\Session", "fromLink": "MBVMedia/Session.html", "link": "MBVMedia/Session.html#method_getLifetime", "name": "MBVMedia\\Session::getLifetime", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Session", "fromLink": "MBVMedia/Session.html", "link": "MBVMedia/Session.html#method_setLifetime", "name": "MBVMedia\\Session::setLifetime", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Session", "fromLink": "MBVMedia/Session.html", "link": "MBVMedia/Session.html#method_start", "name": "MBVMedia\\Session::start", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Session", "fromLink": "MBVMedia/Session.html", "link": "MBVMedia/Session.html#method_getVar", "name": "MBVMedia\\Session::getVar", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Session", "fromLink": "MBVMedia/Session.html", "link": "MBVMedia/Session.html#method_setVar", "name": "MBVMedia\\Session::setVar", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "MBVMedia", "fromLink": "MBVMedia.html", "link": "MBVMedia/SessionControlledTemplate.html", "name": "MBVMedia\\SessionControlledTemplate", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\SessionControlledTemplate", "fromLink": "MBVMedia/SessionControlledTemplate.html", "link": "MBVMedia/SessionControlledTemplate.html#method___construct", "name": "MBVMedia\\SessionControlledTemplate::__construct", "doc": "&quot;SessionControledTemplate constructor.&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\SessionControlledTemplate", "fromLink": "MBVMedia/SessionControlledTemplate.html", "link": "MBVMedia/SessionControlledTemplate.html#method_addActions", "name": "MBVMedia\\SessionControlledTemplate::addActions", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\SessionControlledTemplate", "fromLink": "MBVMedia/SessionControlledTemplate.html", "link": "MBVMedia/SessionControlledTemplate.html#method_ajaxCallback", "name": "MBVMedia\\SessionControlledTemplate::ajaxCallback", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\SessionControlledTemplate", "fromLink": "MBVMedia/SessionControlledTemplate.html", "link": "MBVMedia/SessionControlledTemplate.html#method_renderTemplate", "name": "MBVMedia\\SessionControlledTemplate::renderTemplate", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\SessionControlledTemplate", "fromLink": "MBVMedia/SessionControlledTemplate.html", "link": "MBVMedia/SessionControlledTemplate.html#method_printScript", "name": "MBVMedia\\SessionControlledTemplate::printScript", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "MBVMedia\\Shortcode", "fromLink": "MBVMedia/Shortcode.html", "link": "MBVMedia/Shortcode/AspectRatio.html", "name": "MBVMedia\\Shortcode\\AspectRatio", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\Shortcode\\AspectRatio", "fromLink": "MBVMedia/Shortcode/AspectRatio.html", "link": "MBVMedia/Shortcode/AspectRatio.html#method___construct", "name": "MBVMedia\\Shortcode\\AspectRatio::__construct", "doc": "&quot;BambeeShortcode constructor.&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\AspectRatio", "fromLink": "MBVMedia/Shortcode/AspectRatio.html", "link": "MBVMedia/Shortcode/AspectRatio.html#method_handleShortcode", "name": "MBVMedia\\Shortcode\\AspectRatio::handleShortcode", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\AspectRatio", "fromLink": "MBVMedia/Shortcode/AspectRatio.html", "link": "MBVMedia/Shortcode/AspectRatio.html#method_getShortcodeAlias", "name": "MBVMedia\\Shortcode\\AspectRatio::getShortcodeAlias", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\AspectRatio", "fromLink": "MBVMedia/Shortcode/AspectRatio.html", "link": "MBVMedia/Shortcode/AspectRatio.html#method_getPredefinedRatioList", "name": "MBVMedia\\Shortcode\\AspectRatio::getPredefinedRatioList", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "MBVMedia\\Shortcode", "fromLink": "MBVMedia/Shortcode.html", "link": "MBVMedia/Shortcode/Col.html", "name": "MBVMedia\\Shortcode\\Col", "doc": "&quot;Generate a foundation grid column.&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Col", "fromLink": "MBVMedia/Shortcode/Col.html", "link": "MBVMedia/Shortcode/Col.html#method___construct", "name": "MBVMedia\\Shortcode\\Col::__construct", "doc": "&quot;BambeeShortcode constructor.&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Col", "fromLink": "MBVMedia/Shortcode/Col.html", "link": "MBVMedia/Shortcode/Col.html#method_handleShortcode", "name": "MBVMedia\\Shortcode\\Col::handleShortcode", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "MBVMedia\\Shortcode", "fromLink": "MBVMedia/Shortcode.html", "link": "MBVMedia/Shortcode/CoreData.html", "name": "MBVMedia\\Shortcode\\CoreData", "doc": "&quot;Load a core_data field.&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\Shortcode\\CoreData", "fromLink": "MBVMedia/Shortcode/CoreData.html", "link": "MBVMedia/Shortcode/CoreData.html#method_handleShortcode", "name": "MBVMedia\\Shortcode\\CoreData::handleShortcode", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "MBVMedia\\Shortcode", "fromLink": "MBVMedia/Shortcode.html", "link": "MBVMedia/Shortcode/GlobalData.html", "name": "MBVMedia\\Shortcode\\GlobalData", "doc": "&quot;Load a global_data field.&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\Shortcode\\GlobalData", "fromLink": "MBVMedia/Shortcode/GlobalData.html", "link": "MBVMedia/Shortcode/GlobalData.html#method_handleShortcode", "name": "MBVMedia\\Shortcode\\GlobalData::handleShortcode", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "MBVMedia\\Shortcode\\Lib", "fromLink": "MBVMedia/Shortcode/Lib.html", "link": "MBVMedia/Shortcode/Lib/BambeeShortcode.html", "name": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode", "fromLink": "MBVMedia/Shortcode/Lib/BambeeShortcode.html", "link": "MBVMedia/Shortcode/Lib/BambeeShortcode.html#method___construct", "name": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode::__construct", "doc": "&quot;BambeeShortcode constructor.&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode", "fromLink": "MBVMedia/Shortcode/Lib/BambeeShortcode.html", "link": "MBVMedia/Shortcode/Lib/BambeeShortcode.html#method_getSupportedAtts", "name": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode::getSupportedAtts", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode", "fromLink": "MBVMedia/Shortcode/Lib/BambeeShortcode.html", "link": "MBVMedia/Shortcode/Lib/BambeeShortcode.html#method_addAttribute", "name": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode::addAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode", "fromLink": "MBVMedia/Shortcode/Lib/BambeeShortcode.html", "link": "MBVMedia/Shortcode/Lib/BambeeShortcode.html#method_getDescription", "name": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode::getDescription", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode", "fromLink": "MBVMedia/Shortcode/Lib/BambeeShortcode.html", "link": "MBVMedia/Shortcode/Lib/BambeeShortcode.html#method_setDescription", "name": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode::setDescription", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode", "fromLink": "MBVMedia/Shortcode/Lib/BambeeShortcode.html", "link": "MBVMedia/Shortcode/Lib/BambeeShortcode.html#method_addShortcode", "name": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode::addShortcode", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode", "fromLink": "MBVMedia/Shortcode/Lib/BambeeShortcode.html", "link": "MBVMedia/Shortcode/Lib/BambeeShortcode.html#method_doShortcode", "name": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode::doShortcode", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode", "fromLink": "MBVMedia/Shortcode/Lib/BambeeShortcode.html", "link": "MBVMedia/Shortcode/Lib/BambeeShortcode.html#method_getShortcodeAlias", "name": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode::getShortcodeAlias", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode", "fromLink": "MBVMedia/Shortcode/Lib/BambeeShortcode.html", "link": "MBVMedia/Shortcode/Lib/BambeeShortcode.html#method_getUnqualifiedClassName", "name": "MBVMedia\\Shortcode\\Lib\\BambeeShortcode::getUnqualifiedClassName", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "MBVMedia\\Shortcode\\Lib", "fromLink": "MBVMedia/Shortcode/Lib.html", "link": "MBVMedia/Shortcode/Lib/Handleable.html", "name": "MBVMedia\\Shortcode\\Lib\\Handleable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Lib\\Handleable", "fromLink": "MBVMedia/Shortcode/Lib/Handleable.html", "link": "MBVMedia/Shortcode/Lib/Handleable.html#method_handleShortcode", "name": "MBVMedia\\Shortcode\\Lib\\Handleable::handleShortcode", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "MBVMedia\\Shortcode\\Lib", "fromLink": "MBVMedia/Shortcode/Lib.html", "link": "MBVMedia/Shortcode/Lib/ShortcodeManager.html", "name": "MBVMedia\\Shortcode\\Lib\\ShortcodeManager", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Lib\\ShortcodeManager", "fromLink": "MBVMedia/Shortcode/Lib/ShortcodeManager.html", "link": "MBVMedia/Shortcode/Lib/ShortcodeManager.html#method___construct", "name": "MBVMedia\\Shortcode\\Lib\\ShortcodeManager::__construct", "doc": "&quot;ShortocdeManager constructor.&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Lib\\ShortcodeManager", "fromLink": "MBVMedia/Shortcode/Lib/ShortcodeManager.html", "link": "MBVMedia/Shortcode/Lib/ShortcodeManager.html#method_loadShortcodes", "name": "MBVMedia\\Shortcode\\Lib\\ShortcodeManager::loadShortcodes", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Lib\\ShortcodeManager", "fromLink": "MBVMedia/Shortcode/Lib/ShortcodeManager.html", "link": "MBVMedia/Shortcode/Lib/ShortcodeManager.html#method_addShortcodes", "name": "MBVMedia\\Shortcode\\Lib\\ShortcodeManager::addShortcodes", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Lib\\ShortcodeManager", "fromLink": "MBVMedia/Shortcode/Lib/ShortcodeManager.html", "link": "MBVMedia/Shortcode/Lib/ShortcodeManager.html#method_extendTinyMCE", "name": "MBVMedia\\Shortcode\\Lib\\ShortcodeManager::extendTinyMCE", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Lib\\ShortcodeManager", "fromLink": "MBVMedia/Shortcode/Lib/ShortcodeManager.html", "link": "MBVMedia/Shortcode/Lib/ShortcodeManager.html#method_printShortcodeData", "name": "MBVMedia\\Shortcode\\Lib\\ShortcodeManager::printShortcodeData", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Lib\\ShortcodeManager", "fromLink": "MBVMedia/Shortcode/Lib/ShortcodeManager.html", "link": "MBVMedia/Shortcode/Lib/ShortcodeManager.html#method_tinyMceRegisterButton", "name": "MBVMedia\\Shortcode\\Lib\\ShortcodeManager::tinyMceRegisterButton", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Lib\\ShortcodeManager", "fromLink": "MBVMedia/Shortcode/Lib/ShortcodeManager.html", "link": "MBVMedia/Shortcode/Lib/ShortcodeManager.html#method_tinyMceRegisterPlugin", "name": "MBVMedia\\Shortcode\\Lib\\ShortcodeManager::tinyMceRegisterPlugin", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "MBVMedia\\Shortcode", "fromLink": "MBVMedia/Shortcode.html", "link": "MBVMedia/Shortcode/PageLink.html", "name": "MBVMedia\\Shortcode\\PageLink", "doc": "&quot;Get permalink by id.&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\Shortcode\\PageLink", "fromLink": "MBVMedia/Shortcode/PageLink.html", "link": "MBVMedia/Shortcode/PageLink.html#method___construct", "name": "MBVMedia\\Shortcode\\PageLink::__construct", "doc": "&quot;BambeeShortcode constructor.&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\PageLink", "fromLink": "MBVMedia/Shortcode/PageLink.html", "link": "MBVMedia/Shortcode/PageLink.html#method_handleShortcode", "name": "MBVMedia\\Shortcode\\PageLink::handleShortcode", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\PageLink", "fromLink": "MBVMedia/Shortcode/PageLink.html", "link": "MBVMedia/Shortcode/PageLink.html#method_getShortcodeAlias", "name": "MBVMedia\\Shortcode\\PageLink::getShortcodeAlias", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "MBVMedia\\Shortcode", "fromLink": "MBVMedia/Shortcode.html", "link": "MBVMedia/Shortcode/Row.html", "name": "MBVMedia\\Shortcode\\Row", "doc": "&quot;Generate a foundation grid row.&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Row", "fromLink": "MBVMedia/Shortcode/Row.html", "link": "MBVMedia/Shortcode/Row.html#method___construct", "name": "MBVMedia\\Shortcode\\Row::__construct", "doc": "&quot;BambeeShortcode constructor.&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\Shortcode\\Row", "fromLink": "MBVMedia/Shortcode/Row.html", "link": "MBVMedia/Shortcode/Row.html#method_handleShortcode", "name": "MBVMedia\\Shortcode\\Row::handleShortcode", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "MBVMedia", "fromLink": "MBVMedia.html", "link": "MBVMedia/ThemeView.html", "name": "MBVMedia\\ThemeView", "doc": "&quot;The class representing a view.&quot;"},
                                                        {"type": "Method", "fromName": "MBVMedia\\ThemeView", "fromLink": "MBVMedia/ThemeView.html", "link": "MBVMedia/ThemeView.html#method___construct", "name": "MBVMedia\\ThemeView::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "MBVMedia\\ThemeView", "fromLink": "MBVMedia/ThemeView.html", "link": "MBVMedia/ThemeView.html#method_render", "name": "MBVMedia\\ThemeView::render", "doc": "&quot;Render the view.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


