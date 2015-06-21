/**
 * Created by shihongzhi on 15/6/21.
 */
angular.module('starter.directives', [])

    .directive('notice', function() {

        function link(scope, element, attr) {
            var $text = element.find('span'),
                width = element[0].offsetWidth,
                i = 0;

            $text.html(attr.noticeText);

            var flag = setInterval(function() {
                i -= 1;
                if (i < -width) {
                    i = width;
                }
                $text.css('left', i + 'px');
            }, 50);

            scope.$on('$destroy', function () {
                clearInterval(flag);
            });
        }

        return {
            restrict: 'A',
            link: link,
            replace: true,
            template: '<div class="notice">' +
                            '<span class="textScrolling" style="position: relative"></span>' +
                        '</div>'
        };
    });