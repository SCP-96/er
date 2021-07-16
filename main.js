var canvas = new fabric.Canvas("OMG_a_mobile_task_force_squad");
player_x = 10;
player_y = 10;
block_image_width = 30;
block_imge_height = 30;
var player_object = "";
var block_image_object = "";
function player_has_arrived() {
fabric.Image.fromURL("player.png", function(Img) {
player_object = Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(160);
player_object.set({
top: player_y,
left: player_x
});
canvas.add(player_object);
});
}

function That_no_one_stops(get_image) {
    fabric.Image.fromURL("vampire-blood-layer-cake-web.jpg", function(Img) {
    block_image_object = Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_imge_height);
    block_image_object.set({
    top: player_y,
    left: player_x
    });
    canvas.add(block_image_object);
    });
    }
    
 function PlaySound() {
    x.play();
 }   