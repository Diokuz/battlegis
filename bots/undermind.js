module.exports=function(){var a=this._,b="left",c=a.min(this.frame.players,function(a){if(!(a.x==this.x&&a.y==this.y||a.ticksToRespawn)){var b=Math.sqrt((a.x-this.x)*(a.x-this.x)+(a.y-this.y)*(a.y-this.y));return Math.min(Math.abs(a.x-this.x),Math.abs(a.y-this.y))+.1*b}},this),d=!0;Math.abs(c.x-this.x)<2?b=c.y>this.y?"down":"up":Math.abs(c.y-this.y)<2?b=c.x>this.x?"right":"left":(d=!1,Math.abs(c.x-this.x)>Math.abs(c.y-this.y)?(c.y>this.y&&(b="down"),c.y<this.y&&(b="up")):(c.x>this.x&&(b="right"),c.x<this.x&&(b="left")));var e=a.find(this.frame.shells,function(a){if(a.shooter!=this.name){var b=Math.sqrt((a.x-this.x)*(a.x-this.x)+(a.y-this.y)*(a.y-this.y));return 50>b&&(a.x>=this.x-1&&a.x<=this.x+this.width+1||a.y>=this.y-1&&a.y<=this.y+this.height+1)}},this);e&&(e.x>=this.x-1&&e.x<=this.x+this.width/2?b="right":e.x>this.x+this.width/2&&e.x<=this.x+this.width+1?b="left":e.y>=this.y-1&&e.y<=this.y+this.height/2?b="down":e.y>this.y+this.height/2&&e.y<=this.y+this.height+1&&(b="up")),this[b](),d&&this.fire()};