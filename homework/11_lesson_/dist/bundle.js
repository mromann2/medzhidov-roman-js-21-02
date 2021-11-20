(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// 3. Реализовать страницу с таблицей. Таблица должна содержать инфрмацию, полученную по API https://swapi.dev/api/people/
//     (массив объектов в свойстве "results"). А именно росте, весе и поле персонажей (поля "name", "height", "mass" и "gender" соответственно).
// *Опционально: предусмотреть возможность сортировки таблицы
// *Опционально: предусмотреть возможность перехода к следующей странице (ссылка содержится в объекте API в свойстве "next")
// и предыдущей странице (ссылка содержится в объекте API в свойстве "previous")
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function makeTable() {
    return __awaiter(this, void 0, void 0, function () {
        var response, json, sortButton, nextButton, preButton, table;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://swapi.dev/api/people/")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json = _a.sent();
                    sortButton = document.createElement('button');
                    nextButton = document.createElement('button');
                    preButton = document.createElement('button');
                    table = document.createElement('table');
                    json.results.forEach(function (elem) {
                        var tableRow = document.createElement('tr');
                        tableRow.innerHTML = "<td class = \"name\">" + elem.name + "</td>\n                                <td>" + elem.height + "</td>\n                                <td>" + elem.gender + "</td>";
                        table.appendChild(tableRow);
                    });
                    document.body.appendChild(table);
                    sortButton.textContent = 'Сортировать по имени';
                    preButton.textContent = 'Предыдущее';
                    preButton.classList.add("preButton");
                    nextButton.textContent = 'Следующее';
                    document.body.appendChild(sortButton);
                    document.body.appendChild(preButton);
                    document.body.appendChild(nextButton);
                    sortButton.addEventListener('click', function () {
                        var sortedTable = document.createElement('table');
                        var table = document.querySelector('table');
                        json.results.sort(function (elem, nextElem) { return elem.name > nextElem.name ? 1 : -1; }).forEach(function (elem) {
                            var tableRow = document.createElement('tr');
                            tableRow.innerHTML = "<td class = \"name\">" + elem.name + "</td>\n                                <td>" + elem.height + "</td>\n                                <td>" + elem.gender + "</td>";
                            sortedTable.appendChild(tableRow);
                        });
                        document.body.replaceChild(sortedTable, table);
                    });
                    nextButton.addEventListener('click', function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var nextTable, nextResponse, table2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        nextTable = document.createElement('table');
                                        if (!json.next) return [3 /*break*/, 3];
                                        return [4 /*yield*/, fetch(json.next)];
                                    case 1:
                                        nextResponse = _a.sent();
                                        table2 = document.querySelector('table');
                                        return [4 /*yield*/, nextResponse.json()];
                                    case 2:
                                        json = _a.sent();
                                        json.results.forEach(function (elem) {
                                            var tableRow = document.createElement('tr');
                                            tableRow.innerHTML = "<td class = \"name\">" + elem.name + "</td>\n                                <td>" + elem.height + "</td>\n                                <td>" + elem.gender + "</td>";
                                            nextTable.appendChild(tableRow);
                                        });
                                        document.body.replaceChild(nextTable, table2);
                                        preButton.disabled = false;
                                        return [3 /*break*/, 4];
                                    case 3:
                                        nextButton.disabled = true;
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        });
                    });
                    preButton.addEventListener('click', function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var preTable, preResponse, table2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        preTable = document.createElement('table');
                                        if (!json.previous) return [3 /*break*/, 3];
                                        return [4 /*yield*/, fetch(json.previous)];
                                    case 1:
                                        preResponse = _a.sent();
                                        table2 = document.querySelector('table');
                                        return [4 /*yield*/, preResponse.json()];
                                    case 2:
                                        json = _a.sent();
                                        json.results.forEach(function (elem) {
                                            var tableRow = document.createElement('tr');
                                            tableRow.innerHTML = "<td class = \"name\">" + elem.name + "</td>\n                                <td>" + elem.height + "</td>\n                                <td>" + elem.gender + "</td>";
                                            preTable.appendChild(tableRow);
                                        });
                                        document.body.replaceChild(preTable, table2);
                                        nextButton.disabled = false;
                                        return [3 /*break*/, 4];
                                    case 3:
                                        preButton.disabled = true;
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
makeTable();
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLDBIQUEwSDtBQUMxSCxnSkFBZ0o7QUFDaEosNkRBQTZEO0FBQzdELDRIQUE0SDtBQUM1SCxnRkFBZ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsU0FBZSxTQUFTOzs7Ozt3QkFDTCxxQkFBTSxLQUFLLENBQUMsK0JBQStCLENBQUMsRUFBQTs7b0JBQXZELFFBQVEsR0FBRyxTQUE0QztvQkFDaEQscUJBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOztvQkFBNUIsSUFBSSxHQUFHLFNBQXFCO29CQUU1QixVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtvQkFDN0MsVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUE7b0JBQzdDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUM1QyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFTM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFlO3dCQUNqQyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO3dCQUMzQyxRQUFRLENBQUMsU0FBUyxHQUFHLDBCQUFzQixJQUFJLENBQUMsSUFBSSxtREFDdEIsSUFBSSxDQUFDLE1BQU0sbURBQ1gsSUFBSSxDQUFDLE1BQU0sVUFBTyxDQUFBO3dCQUNoRCxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUMvQixDQUFDLENBQUMsQ0FBQTtvQkFDRixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFFaEMsVUFBVSxDQUFDLFdBQVcsR0FBRyxzQkFBc0IsQ0FBQTtvQkFDL0MsU0FBUyxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUE7b0JBQ3BDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO29CQUNwQyxVQUFVLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztvQkFDckMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUE7b0JBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFBO29CQUNwQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtvQkFFckMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTt3QkFDakMsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTt3QkFDakQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTt3QkFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFlLEVBQUUsUUFBbUIsSUFBSyxPQUFBLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQWU7NEJBQ3BILElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7NEJBQzNDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsMEJBQXNCLElBQUksQ0FBQyxJQUFJLG1EQUMxQixJQUFJLENBQUMsTUFBTSxtREFDWCxJQUFJLENBQUMsTUFBTSxVQUFPLENBQUE7NEJBQzVDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUE7d0JBQ3JDLENBQUMsQ0FBQyxDQUFBO3dCQUNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQTtvQkFDbEQsQ0FBQyxDQUFDLENBQUE7b0JBSUYsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTs7Ozs7O3dDQUM3QixTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTs2Q0FDNUMsSUFBSSxDQUFDLElBQUksRUFBVCx3QkFBUzt3Q0FDVyxxQkFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3Q0FBckMsWUFBWSxHQUFHLFNBQXNCO3dDQUNyQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTt3Q0FDckMscUJBQU0sWUFBWSxDQUFDLElBQUksRUFBRSxFQUFBOzt3Q0FBaEMsSUFBSSxHQUFHLFNBQXlCLENBQUE7d0NBRWhDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBZTs0Q0FDakMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTs0Q0FDM0MsUUFBUSxDQUFDLFNBQVMsR0FBRywwQkFBc0IsSUFBSSxDQUFDLElBQUksbURBQzlCLElBQUksQ0FBQyxNQUFNLG1EQUNYLElBQUksQ0FBQyxNQUFNLFVBQU8sQ0FBQTs0Q0FDeEMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQTt3Q0FDbkMsQ0FBQyxDQUFDLENBQUE7d0NBQ0YsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFBO3dDQUM3QyxTQUFTLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTs7O3dDQUN4QixVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7Ozs7O3FCQUVuQyxDQUFFLENBQUE7b0JBRUgsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTs7Ozs7O3dDQUM1QixRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTs2Q0FDM0MsSUFBSSxDQUFDLFFBQVEsRUFBYix3QkFBYTt3Q0FDTSxxQkFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3Q0FBeEMsV0FBVyxHQUFHLFNBQTBCO3dDQUN4QyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTt3Q0FDckMscUJBQU0sV0FBVyxDQUFDLElBQUksRUFBRSxFQUFBOzt3Q0FBL0IsSUFBSSxHQUFHLFNBQXdCLENBQUE7d0NBRS9CLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBZTs0Q0FDakMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTs0Q0FDM0MsUUFBUSxDQUFDLFNBQVMsR0FBRywwQkFBc0IsSUFBSSxDQUFDLElBQUksbURBQzlCLElBQUksQ0FBQyxNQUFNLG1EQUNYLElBQUksQ0FBQyxNQUFNLFVBQU8sQ0FBQTs0Q0FDeEMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQTt3Q0FDbEMsQ0FBQyxDQUFDLENBQUE7d0NBQ0YsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBO3dDQUM1QyxVQUFVLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTs7O3dDQUN6QixTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs7Ozs7O3FCQUVsQyxDQUFFLENBQUE7Ozs7O0NBRU47QUFFRCxTQUFTLEVBQUUsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIDMuINCg0LXQsNC70LjQt9C+0LLQsNGC0Ywg0YHRgtGA0LDQvdC40YbRgyDRgSDRgtCw0LHQu9C40YbQtdC5LiDQotCw0LHQu9C40YbQsCDQtNC+0LvQttC90LAg0YHQvtC00LXRgNC20LDRgtGMINC40L3RhNGA0LzQsNGG0LjRjiwg0L/QvtC70YPRh9C10L3QvdGD0Y4g0L/QviBBUEkgaHR0cHM6Ly9zd2FwaS5kZXYvYXBpL3Blb3BsZS9cclxuLy8gICAgICjQvNCw0YHRgdC40LIg0L7QsdGK0LXQutGC0L7QsiDQsiDRgdCy0L7QudGB0YLQstC1IFwicmVzdWx0c1wiKS4g0JAg0LjQvNC10L3QvdC+INGA0L7RgdGC0LUsINCy0LXRgdC1INC4INC/0L7Qu9C1INC/0LXRgNGB0L7QvdCw0LbQtdC5ICjQv9C+0LvRjyBcIm5hbWVcIiwgXCJoZWlnaHRcIiwgXCJtYXNzXCIg0LggXCJnZW5kZXJcIiDRgdC+0L7RgtCy0LXRgtGB0YLQstC10L3QvdC+KS5cclxuLy8gKtCe0L/RhtC40L7QvdCw0LvRjNC90L46INC/0YDQtdC00YPRgdC80L7RgtGA0LXRgtGMINCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0YHQvtGA0YLQuNGA0L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcclxuLy8gKtCe0L/RhtC40L7QvdCw0LvRjNC90L46INC/0YDQtdC00YPRgdC80L7RgtGA0LXRgtGMINCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0L/QtdGA0LXRhdC+0LTQsCDQuiDRgdC70LXQtNGD0Y7RidC10Lkg0YHRgtGA0LDQvdC40YbQtSAo0YHRgdGL0LvQutCwINGB0L7QtNC10YDQttC40YLRgdGPINCyINC+0LHRitC10LrRgtC1IEFQSSDQsiDRgdCy0L7QudGB0YLQstC1IFwibmV4dFwiKVxyXG4vLyDQuCDQv9GA0LXQtNGL0LTRg9GJ0LXQuSDRgdGC0YDQsNC90LjRhtC1ICjRgdGB0YvQu9C60LAg0YHQvtC00LXRgNC20LjRgtGB0Y8g0LIg0L7QsdGK0LXQutGC0LUgQVBJINCyINGB0LLQvtC50YHRgtCy0LUgXCJwcmV2aW91c1wiKVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbWFrZVRhYmxlKCl7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vc3dhcGkuZGV2L2FwaS9wZW9wbGUvXCIpXHJcbiAgICBsZXQganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgIGxldCBzb3J0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGxldCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGxldCBwcmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKVxyXG5cclxuICAgIHR5cGUgQXBpQW5zd2VyID0ge1xyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICBnZW5kZXI6IHN0cmluZyxcclxuICAgIH1cclxuXHJcblxyXG4gICAganNvbi5yZXN1bHRzLmZvckVhY2goKGVsZW06IEFwaUFuc3dlcikgPT4ge1xyXG4gICAgICAgIGxldCB0YWJsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcclxuICAgICAgICB0YWJsZVJvdy5pbm5lckhUTUwgPSBgPHRkIGNsYXNzID0gXCJuYW1lXCI+JHtlbGVtLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtlbGVtLmhlaWdodH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2VsZW0uZ2VuZGVyfTwvdGQ+YFxyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHRhYmxlUm93KVxyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFibGUpXHJcblxyXG4gICAgc29ydEJ1dHRvbi50ZXh0Q29udGVudCA9ICfQodC+0YDRgtC40YDQvtCy0LDRgtGMINC/0L4g0LjQvNC10L3QuCdcclxuICAgIHByZUJ1dHRvbi50ZXh0Q29udGVudCA9ICfQn9GA0LXQtNGL0LTRg9GJ0LXQtSdcclxuICAgIHByZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJlQnV0dG9uXCIpXHJcbiAgICBuZXh0QnV0dG9uLnRleHRDb250ZW50ID0gJ9Ch0LvQtdC00YPRjtGJ0LXQtSc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNvcnRCdXR0b24pXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByZUJ1dHRvbilcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmV4dEJ1dHRvbilcclxuXHJcbiAgICBzb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICAgICAgbGV0IHNvcnRlZFRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKVxyXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJylcclxuICAgICAgICBqc29uLnJlc3VsdHMuc29ydCgoZWxlbTogQXBpQW5zd2VyLCBuZXh0RWxlbTogQXBpQW5zd2VyKSA9PiBlbGVtLm5hbWUgPiBuZXh0RWxlbS5uYW1lID8gMSA6IC0xKS5mb3JFYWNoKChlbGVtOiBBcGlBbnN3ZXIpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxyXG4gICAgICAgICAgICB0YWJsZVJvdy5pbm5lckhUTUwgPSBgPHRkIGNsYXNzID0gXCJuYW1lXCI+JHtlbGVtLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtlbGVtLmhlaWdodH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2VsZW0uZ2VuZGVyfTwvdGQ+YFxyXG4gICAgICAgICAgICBzb3J0ZWRUYWJsZS5hcHBlbmRDaGlsZCh0YWJsZVJvdylcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVwbGFjZUNoaWxkKHNvcnRlZFRhYmxlLCB0YWJsZSlcclxuICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgbGV0IG5leHRUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJylcclxuICAgICAgICBpZihqc29uLm5leHQpe1xyXG4gICAgICAgICAgICBsZXQgbmV4dFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goanNvbi5uZXh0KVxyXG4gICAgICAgICAgICBsZXQgdGFibGUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKVxyXG4gICAgICAgICAgICBqc29uID0gYXdhaXQgbmV4dFJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgICAgICAgICAganNvbi5yZXN1bHRzLmZvckVhY2goKGVsZW06IEFwaUFuc3dlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxyXG4gICAgICAgICAgICAgICAgdGFibGVSb3cuaW5uZXJIVE1MID0gYDx0ZCBjbGFzcyA9IFwibmFtZVwiPiR7ZWxlbS5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7ZWxlbS5oZWlnaHR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtlbGVtLmdlbmRlcn08L3RkPmBcclxuICAgICAgICAgICAgICAgIG5leHRUYWJsZS5hcHBlbmRDaGlsZCh0YWJsZVJvdylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZXBsYWNlQ2hpbGQobmV4dFRhYmxlLCB0YWJsZTIpXHJcbiAgICAgICAgICAgIHByZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgfWVsc2UgbmV4dEJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcclxuXHJcbiAgICB9IClcclxuXHJcbiAgICBwcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBsZXQgcHJlVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpXHJcbiAgICAgICAgaWYoanNvbi5wcmV2aW91cyl7XHJcbiAgICAgICAgICAgIGxldCBwcmVSZXNwb25zZSA9IGF3YWl0IGZldGNoKGpzb24ucHJldmlvdXMpXHJcbiAgICAgICAgICAgIGxldCB0YWJsZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpXHJcbiAgICAgICAgICAgIGpzb24gPSBhd2FpdCBwcmVSZXNwb25zZS5qc29uKClcclxuXHJcbiAgICAgICAgICAgIGpzb24ucmVzdWx0cy5mb3JFYWNoKChlbGVtOiBBcGlBbnN3ZXIpPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxyXG4gICAgICAgICAgICAgICAgdGFibGVSb3cuaW5uZXJIVE1MID0gYDx0ZCBjbGFzcyA9IFwibmFtZVwiPiR7ZWxlbS5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7ZWxlbS5oZWlnaHR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtlbGVtLmdlbmRlcn08L3RkPmBcclxuICAgICAgICAgICAgICAgIHByZVRhYmxlLmFwcGVuZENoaWxkKHRhYmxlUm93KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlcGxhY2VDaGlsZChwcmVUYWJsZSwgdGFibGUyKVxyXG4gICAgICAgICAgICBuZXh0QnV0dG9uLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICB9ZWxzZSBwcmVCdXR0b24uZGlzYWJsZWQgPSB0cnVlXHJcblxyXG4gICAgfSApXHJcblxyXG59XHJcblxyXG5tYWtlVGFibGUoKVxyXG5cclxuIl19
